import React from "react";
import UserProfile from "../UserProfilePicture/UserProfile";
import { PiCellSignalNoneFill } from "react-icons/pi"; //no priority
import { BsFillExclamationSquareFill } from "react-icons/bs"; // urgent
import { PiCellSignalFullFill } from "react-icons/pi";
import { PiCellSignalMediumFill } from "react-icons/pi";
import { PiCellSignalLowFill } from "react-icons/pi";
import { BiAdjust } from "react-icons/bi"; //inprogress yellow
import { BsFillXCircleFill } from "react-icons/bs"; //cancelled grey
import { FcOk } from "react-icons/fc"; // done blue
import { PiCircle } from "react-icons/pi"; //todo grey
import { PiCircleDashed } from "react-icons/pi"; //backlog grey
import Cards from "../Card/Card";

const priorityIcons = {
    "No Priority": PiCellSignalNoneFill,
    "Urgent": BsFillExclamationSquareFill,
    "High": PiCellSignalFullFill,
    "Medium": PiCellSignalMediumFill,
    "Low": PiCellSignalLowFill,
};

const priorityColors = {
    "No Priority": "grey",
    "Urgent": "orange",
    "High": "grey",
    "Medium": "grey",
    "Low": "grey",
};

const progressIcons = {
    Backlog: PiCircleDashed,
    Todo: PiCircle,
    "In progress": BiAdjust,
    Done: FcOk,
    Canceled: BsFillXCircleFill,
};

const progressColors = {
    Backlog: "grey",
    Todo: "grey",
    "In progress": "orange",
    Done: "blue",
    Canceled: "grey",
};

const Sections = ({ index, ticketData, passingData, groupBy }) => {
    const prioritySequence = ["Urgent", "High", "Medium", "Low", "No Priority"];

    return (
        <div style={{ backgroundColor: "", maxWidth: "16em" }}>
            {groupBy === "status" && (
                <div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div
                            style={{
                                color: `${progressColors[index]}`,
                                marginRight: ".5em",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {React.createElement(progressIcons[index])}
                        </div>

                        <div style={{ marginRight: "1.4em" }}>{index}</div>

                        <div className="header">
                            {passingData[index].length ? passingData[index].length : 0}
                        </div>

                        <div
                            style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}
                        >
                            <div
                                className="header"
                                style={{
                                    marginLeft: "4em",
                                    fontSize: "1.2em",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: "1em",
                                }}
                            >
                                +
                            </div>

                            <div className="header">...</div>
                        </div>
                    </div>

                    <div>
                        {passingData[index].length &&
                            passingData[index].map((value) => {
                                return (
                                    <Cards
                                        id={value.id}
                                        title={value.title}
                                        groupBy={groupBy}
                                        userId={value.userId}
                                        priority={value.priority}
                                        ticketData={ticketData}
                                        status={value.status}
                                        requirement={value.tag}
                                    />
                                );
                            })}
                        {passingData[index].length === 0 && (
                            <div
                                style={{
                                    minWidth: "2.1em",
                                    minHeight: "3em",
                                    height: "3em",
                                    backgroundColor: "red",
                                }}
                            >
                                hello
                            </div>
                        )}
                    </div>
                </div>
            )}

            {groupBy === "priority" && (
                <div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        {console.log(priorityColors[prioritySequence[index]])}
                        <div
                            style={{
                                color: `${priorityColors[prioritySequence[index]]}`,
                                marginRight: ".5em",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {React.createElement(priorityIcons[prioritySequence[Number(index)]])}
                        </div>

                        <div style={{ marginRight: "1.4em" }}>
                            {passingData[4 - index] !== undefined && prioritySequence[Number(index)]}
                        </div>

                        <div className="header">
                            {" "}
                            {passingData[4 - index] !== undefined &&
                                passingData[4 - index].length}{" "}
                        </div>

                        <div
                            style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}
                        >
                            <div
                                className="header"
                                style={{
                                    fontSize: "1.2em",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: "1em",
                                }}
                            >
                                +
                            </div>

                            <div className="header">...</div>
                        </div>
                    </div>

                    <div>
                        {passingData[4 - index] !== undefined &&
                            passingData[4 - index].map((value) => {

                                return (
                                    <Cards
                                        id={value.id}
                                        title={value.title}
                                        groupBy={groupBy}
                                        userId={value.userId}
                                        ticketData={ticketData}
                                        status={value.status}
                                        priority={value.priority}
                                        requirement={value.tag}
                                    />
                                );
                            })}
                    </div>
                </div>
            )}

            {groupBy === "user" && (
                <div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        {/* {console.log(passingData[index][0].userId)} */}
                        {/* icon */}
                        {
                            <UserProfile
                                userId={index}
                                Userdata={ticketData.users}
                            />
                        }
                        <div style={{ marginRight: "1.4em" }}>
                            {
                                ticketData.users.map(key => {
                                    if (key.id === index) {
                                        return (key.name)
                                    }
                                })
                            }
                        </div>

                        <div className="header">{passingData[index].length}</div>
                        <div
                            style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}
                        >
                            <div
                                className="header"
                                style={{
                                    fontSize: "1.2em",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: "1em",
                                }}
                            >
                                +
                            </div>

                            <div className="header">...</div>
                        </div>
                    </div>

                    <div>
                        {passingData[index].map((value) => {
                            return (
                                <Cards
                                    id={value.id}
                                    title={value.title}
                                    groupBy={groupBy}
                                    userId={passingData[index][0].userId}
                                    ticketData={ticketData}
                                    status={value.status}
                                    priority={value.priority}
                                    requirement={value.tag}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sections;
