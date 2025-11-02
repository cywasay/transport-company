"use client";
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { useTab23Store, setRooms } from "./Tab23Store";

export function Tab4SmallD() {
  const { rooms: storeRooms } = useTab23Store();
  const [isOpen, setIsOpen] = useState(false);
  const [rooms, setLocalRooms] = useState(storeRooms || [
    { id: 1, adults: 2, children: [] }
  ]);
  const buttonRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const updateRooms = (newRooms) => {
    setLocalRooms(newRooms);
    setRooms(newRooms); // Save to store
  };

  const addRoom = () => {
    const newRooms = [...rooms, { id: rooms.length + 1, adults: 2, children: [] }];
    updateRooms(newRooms);
  };

  const removeRoom = (roomId) => {
    if (rooms.length > 1) {
      const newRooms = rooms.filter(room => room.id !== roomId);
      updateRooms(newRooms);
    }
  };

  const updateAdults = (roomId, delta) => {
    const newRooms = rooms.map(room => {
      if (room.id === roomId) {
        const newAdults = Math.max(1, room.adults + delta);
        return { ...room, adults: newAdults };
      }
      return room;
    });
    updateRooms(newRooms);
  };

  const addChild = (roomId, age) => {
    const newRooms = rooms.map(room => {
      if (room.id === roomId) {
        return { ...room, children: [...room.children, age] };
      }
      return room;
    });
    updateRooms(newRooms);
  };

  const removeChild = (roomId, childIndex) => {
    const newRooms = rooms.map(room => {
      if (room.id === roomId) {
        return { 
          ...room, 
          children: room.children.filter((_, index) => index !== childIndex) 
        };
      }
      return room;
    });
    updateRooms(newRooms);
  };

  const updateChildAge = (roomId, childIndex, newAge) => {
    const newRooms = rooms.map(room => {
      if (room.id === roomId) {
        const newChildren = [...room.children];
        newChildren[childIndex] = newAge;
        return { ...room, children: newChildren };
      }
      return room;
    });
    updateRooms(newRooms);
  };

  const getTotalGuests = () => {
    const totalAdults = rooms.reduce((sum, room) => sum + room.adults, 0);
    const totalChildren = rooms.reduce((sum, room) => sum + room.children.length, 0);
    const total = totalAdults + totalChildren;
    
    if (rooms.length === 1 && rooms[0].adults === 2 && rooms[0].children.length === 0) {
      return "Guest";
    }
    
    return `${total} Guest${total !== 1 ? 's' : ''}`;
  };

  return (
    <div className="relative md:col-span-1 col-span-1">
      <div 
        ref={buttonRef}
        className="border border-gray-200 rounded-md hover:bg-gray-50 transition-colors cursor-pointer h-auto min-h-[36px] sm:h-9 md:h-11 flex items-center justify-center px-2 sm:px-3 md:px-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h4 className="font-medium text-gray-800 text-xs sm:text-sm">{getTotalGuests()}</h4>
        </div>
      </div>

      {isOpen && (
        <div 
          ref={popupRef}
          className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-xl w-[calc(100vw-2rem)] sm:w-80 md:w-96 p-4 sm:p-6 max-h-96 overflow-y-auto z-50 border border-gray-200"
        >
          {rooms.map((room, index) => (
            <div key={room.id} className={index > 0 ? 'mt-6 pt-6 border-t border-gray-200' : ''}>
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">Room {room.id}</h3>
                {rooms.length > 1 && (
                  <button 
                    onClick={() => removeRoom(room.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-2">Adults</label>
                  <div className="flex items-center border border-gray-300 rounded-md w-28 sm:w-32">
                    <button 
                      onClick={() => updateAdults(room.id, -1)}
                      className="px-3 sm:px-4 py-2 text-gray-600 hover:bg-gray-50 text-sm sm:text-base"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-medium text-sm sm:text-base">{room.adults}</span>
                    <button 
                      onClick={() => updateAdults(room.id, 1)}
                      className="px-3 sm:px-4 py-2 text-gray-600 hover:bg-gray-50 text-sm sm:text-base"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-2">Children (ages)</label>
                  <div className="flex flex-wrap gap-2">
                    {room.children.map((age, childIndex) => (
                      <div key={childIndex} className="flex items-center gap-1 border border-gray-300 rounded-md px-2 py-1">
                        <select
                          value={age}
                          onChange={(e) => updateChildAge(room.id, childIndex, parseInt(e.target.value))}
                          className="text-sm border-none outline-none bg-transparent"
                        >
                          {[...Array(18)].map((_, i) => (
                            <option key={i} value={i}>{i}</option>
                          ))}
                        </select>
                        <button 
                          onClick={() => removeChild(room.id, childIndex)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addChild(room.id, 0)}
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50"
                    >
                      + Add Child
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2 sm:gap-0">
            <button 
              onClick={addRoom}
              className="text-green-600 font-medium hover:text-green-700 text-sm sm:text-base"
            >
              + Add Room
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="bg-green-500 text-white px-4 sm:px-6 py-2 rounded-md font-medium hover:bg-green-600 text-sm sm:text-base"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
