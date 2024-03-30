import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { useState } from 'react';

const nftChar = [
  { id: 'monk1', name: 'King Monk', char: '/image/monk1.png' },
  { id: 'monk2', name: 'Punk Monk', char: '/image/monk2.png' },
  { id: 'monk3', name: 'Silver Monk', char: '/image/monk3.png' },
];
const DragAndDrop = () => {
  const [characters, updateCharacters] = useState(nftChar);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  return (
    <>
      <h1 className="text-center mt-10 text-xl font-bold text-blue-500">Popular Monk Characters</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul className="characters max-w-xl mx-auto flex flex-col px-3 py-12 gap-10" {...provided.droppableProps} ref={provided.innerRef}>
              {characters.map(({ id, name, char }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <li className="relative group" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25  transition duration-1000 "></div>
                      <div className="relative bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                        <div className="w-auto h-20 ">
                          <img src={char} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col justify-center space-y-2 py-6">
                          <p className="text-slate-800">
                            {' '}
                            <span className="font-bold text-blue-400">{name} </span>ui incidunt accusamus{' '}
                          </p>
                        </div>
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default DragAndDrop;
