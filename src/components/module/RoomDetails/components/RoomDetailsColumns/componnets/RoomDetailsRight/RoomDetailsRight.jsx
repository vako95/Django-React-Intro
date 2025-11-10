import { useState } from "react";
import { TfiLineDashed } from "react-icons/tfi";

import "./RoomDetailsRight.css";
import { HoverButton, BookingFrame, BookingFrameInput, BookingOrder, Calendar, Quantity } from "@components/ui";

import { useCalendarControl } from "@hooks";
// import { bookingMock } from "../../../../../../../mocks/bookingMock.js";

const RoomDetailsRight = () => {
    const [range, setRange] = useState({ from: undefined, to: undefined });
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [childs, setChilds] = useState(0);

    const { ref,
        isOpen,
        toggleDropdown,
    } = useCalendarControl();

    const handleSelectRange = (newRange) => {
        if (!newRange) return;
        setRange(newRange);
    };

    return (
        <article className="rooms-details__column rooms-details__columns--right" >
            <div className="rooms-details__booking">
                <BookingFrame>
                    <div className="rooms-details__booking-container" ref={ref}>
                        <div className="rooms-details__booking-content" onClick={() => toggleDropdown("calendar")}>
                            <div className="rooms-details__booking-wrapper">
                                <div className="rooms-details__booking-field">
                                    <BookingFrameInput
                                        title="Check In"
                                        onChange={handleSelectRange}
                                        value={range.from ? range.from.toISOString().slice(0, 10) :
                                            <span className="rooms-details__booking-icon">
                                                <TfiLineDashed />
                                            </span>
                                        }
                                        isOpen={isOpen === "calendar"}
                                    />
                                </div>
                                {isOpen === "calendar" && (
                                    <div className="rooms-details__booking-calendar">
                                        <Calendar range={range} setRange={handleSelectRange} />
                                    </div>
                                )}
                            </div>
                            <div className="rooms-details__booking-wrapper">
                                <div className="rooms-details__booking-field">
                                    <BookingFrameInput
                                        title="Check Out"
                                        onChange={handleSelectRange}
                                        value={range.to ? range.to.toISOString().slice(0, 10) :
                                            <span className="rooms-details__booking-icon">
                                                <TfiLineDashed />
                                            </span>
                                        }
                                        isOpen={isOpen === "calendar"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="rooms-details__booking-wrapper">
                            <div className="rooms-details__booking-field" onClick={() => toggleDropdown("rooms")}>
                                <BookingFrameInput
                                    title="Rooms"
                                    subtitle="Rooms"
                                    value={rooms}
                                    isOpen={isOpen === "rooms"}
                                />
                                {isOpen === "rooms" && (
                                    <div className="rooms-details__booking-dropdown">
                                        <Quantity
                                            title="rooms"
                                            initial={rooms}
                                            min={1}
                                            max={10}
                                            onChange={setRooms}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="rooms-details__booking-wrapper">
                            <div className="rooms-details__booking-field-group">
                                <div className="rooms-details__booking-field" onClick={() => toggleDropdown("adults")}>
                                    <BookingFrameInput
                                        title="Adults"
                                        value={adults}
                                        isOpen={isOpen === "adults"}
                                    />

                                    {isOpen === "adults" && (
                                        <div className="rooms-details__booking-dropdown">
                                            <Quantity
                                                variant="small"
                                                initial={adults}
                                                min={1}
                                                max={10}
                                                onChange={setAdults}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="rooms-details__booking-field" onClick={() => toggleDropdown("childs")}>
                                    <BookingFrameInput
                                        title="Child"
                                        value={childs}
                                        isOpen={isOpen === "childs"}
                                    />

                                    {isOpen === "childs" && (
                                        <div className="rooms-details__booking-dropdown">
                                            <Quantity
                                                variant="small"
                                                initial={childs}
                                                min={1}
                                                max={10}
                                                onChange={setChilds}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </BookingFrame >
                <form className="room__details-form" >
                    <BookingOrder
                        value=""
                    />
                </form>
                <div className="rooms-details__booking-action">
                    <HoverButton>
                        Book Your Stay Now hərflər как дела
                    </HoverButton>
                </div>
            </div>

        </article>
    )
}

export default RoomDetailsRight;