import { React, useState, useEffect, useRef } from "react";
import { getData } from "./util/getData";
import { groupByFunc } from "./util/groupBy";
import { orderByFunc } from "./util/orderBy";
import "./App.css";
import { BiSlider } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import Sections from "./components/Sections/Sections";

const App = () => {
  const [showController, setShowController] = useState(false);
  const controllerRef = useRef(null);
  const [orderBy, setOrderBy] = useState('priority'); // by default it is ordered by priority
  const [groupBy, setGroupBy] = useState('status');   // by default grouped by status
  const [ticketData, setTicketData] = useState(null);
  const [passingData, setPassingData] = useState(null);


  const taskStatus = [
    "Backlog",
    "Todo",
    "In progress",
    "Done", "Canceled"]

  //fetching data from util function and setting it
  useEffect(() => {

    const fetchTakAndSetTask = async () => {
      const fetchedData = await getData();
      if (fetchedData) {

        setTicketData(fetchedData);
      }
    };
    fetchTakAndSetTask();

  }, [])

  useEffect(() => {

    if (ticketData !== null) {
      const a = groupByFunc(ticketData, groupBy);
      //  console.log(a);
      const d = orderByFunc(a, groupBy, orderBy);
      if (groupBy === 'status') {
        for (let i = 0; i < taskStatus.length; i++) {
          let check = false;
          // eslint-disable-next-line array-callback-return
          Object.keys(d).map(index => {
            // eslint-disable-next-line eqeqeq
            if (index == taskStatus[i]) check = true;


          })
          // eslint-disable-next-line eqeqeq
          if (check == false) {
            // console.log(check)
            d[taskStatus[i]] = {};


          }
        }

      }
      localStorage.setItem("groupby", groupBy);
      localStorage.setItem("orderby", orderBy);

      setPassingData(d);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ticketData, groupBy, orderBy]);

  return (
    <div className="home">
      <div className="top-nav">
        <div
          className="controls" tabIndex={2}
          onClick={() => {
            setShowController(!showController);
          }}
          ref={controllerRef}
        >
          <div className="icons">
            <BiSlider />
          </div>
          <div className="head">Display</div>
          <div className="icons">
            <AiOutlineDown />
          </div>
        </div>
      </div>
      {showController && (
        <div className="subevent-display">
          <>
            <div className="select_id">
              <p>Grouping</p>

              <div>
                <select name="grouping" id="grouping" value={groupBy} onChange={(e) => { setPassingData(null); setGroupBy(e.target.value) }}>
                  <option value="status">Status</option>
                  <option value="priority">Priority</option>
                  <option value="user">User</option>

                </select>
              </div>
            </div>
            <div className="select_id">
              <p>Ordering</p>
              <div>
                <select name="ordering" id="ordering" value={orderBy} onChange={(e) => { setPassingData(null); setOrderBy(e.target.value) }}>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </>
        </div>
      )
      }
      <div className="view-info" >
        {
          passingData &&
          Object.keys(passingData).map(
            index =>
              <Sections key={index} index={index} ticketData={ticketData} passingData={passingData} groupBy={groupBy} />
          )
        }

      </div>
    </div >
  );
};

export default App;
