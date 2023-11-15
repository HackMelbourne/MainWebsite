// Edit span tags to white after bg change to black
interface Event {
  title: string;
  description: string
}

interface DescriptionBoxesProps {
  events: Event[];
}

function DescriptionBoxes({ events }: DescriptionBoxesProps) {

  // Ensure exactly three events
  if (events.length !== 3) {
    console.error('DescriptionBoxes component expects exactly three events.');
    return null;
  }

  return (
    <div className="flex flex-col h-[140vh] md:h-[100vh] max-w-[1100px] justify-between w-[80%] m-auto">

      {/* First Event */}
      <div className="flex flex-col h-[30%] md:flex-row md:justify-between md:self-start md:gap-16">
        <div className="border border-gray-200 h-1/2 md:w-1/2 md:h-full" />
        <div className="h-1/2 md:h-full md:w-1/2 flex flex-col gap-4 justify-center align-center">
          <div className="text-2xl md:text-3xl font-bold text-[#F3B52A]">
            Event<span className=""> {events[0].title}</span>
          </div>
          <div className="text-sm">{events[0].description}</div>
        </div>
      </div>

      {/* Second Event */}
      <div className="flex flex-col h-[30%] md:h-[20%] md:flex-row md:justify-between md:w-4/5 md:self-end md:gap-16">
        <div className="order-2 md:order-1 h-1/2 md:h-full md:w-1/2 flex flex-col gap-4 justify-center align-center">
          <div className="text-2xl md:text-3xl font-bold text-[#F3B52A]">
            Event <span className="">{events[1].title}</span>
          </div>
          <div className="text-sm">{events[1].description}</div>
        </div>
        <div className="order-1 md:order-2 border h-1/2 md:w-1/2 md:h-full"/>
      </div>

      {/* Third Event */}
      <div className="flex flex-col h-[30%] md:flex-row md:justify-between md:w-4/5 md:self-start md:gap-16">
        <div className="border h-1/2 md:w-1/2 md:h-full" />
        <div className="h-1/2 md:h-full md:w-3/4 flex flex-col gap-4 justify-center align-center">
          <div className="text-2xl md:text-3xl font-bold text-[#F3B52A]">
            Event<span className=""> {events[2].title}</span>
          </div>
          <div className="text-sm">{events[2].description}</div>
        </div>
      </div>

    </div>
  );
}

export default DescriptionBoxes;
