import { Combobox, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState, Fragment } from "react";
import { useLocation, useNavigate } from "react-router";

function SearchBar() {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  let queryParams = new URLSearchParams(location.search);
  if (queryParams.has("title")) {
    queryParams.delete("title");
  }

  const handleSearch = () => {
    if (query !== "") {
      queryParams.append("title", query);
      let items = localStorage.getItem("searchTextStorages")
        ? JSON.parse(localStorage.getItem("searchTextStorages"))
        : [];
      items.unshift(query);
      if (items.length > 10) {
        items = items.splice(0, 10);
      }

      localStorage.setItem("searchTextStorages", JSON.stringify(items));
      setSelected(query);
      navigate(`/search?${queryParams.toString()}`);
    }
  };

  const searchTextStorage = JSON.parse(
    localStorage.getItem("searchTextStorages"),
  );
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setSelected(event.target.value);
      handleSearch();
    }
  };

  const filteredSearch =
    query === ""
      ? searchTextStorage
      : searchTextStorage?.filter((person) =>
          person
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );
  return (
    <div>
      <Combobox value={selected} onChange={setSelected}>
        <div>
          <div>
            <Combobox.Input
              displayValue={(person) => person}
              onKeyDown={handleKeyDown}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button onClick={handleSearch}>
              <MagnifyingGlassIcon />
            </Combobox.Button>
          </div>
          <Transition as={Fragment} afterLeave={() => setQuery("")}>
            <Combobox.Options>
              {filteredSearch?.length === 0 && query !== "" ? (
                <div>Tìm kiếm sản phẩm bạn yêu thích</div>
              ) : (
                filteredSearch?.map((person) => (
                  <Combobox.Option key={person} value={person}>
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchBar;
