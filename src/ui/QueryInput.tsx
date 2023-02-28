import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

function QueryInput() {
  return (
    <div className="absolute top-5 left-5 w-96 mt-1 flex rounded-md shadow-sm">
      <div className="relative flex flex-grow items-stretch focus-within:z-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="text"
          name="query"
          id="query"
          className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-primary focus:ring-primary sm:text-sm"
          placeholder="Enter your query"
        />
      </div>
      <button
        type="button"
        className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-primary text-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      >
        <span>Search</span>
      </button>
    </div>
  );
}

export default QueryInput;
