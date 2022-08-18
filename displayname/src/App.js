import React, { useState } from "react";
import MOCK_DATA from "./MOCK_DATA.json";
import {Pagination,PaginationItem,PaginationLink} from 'reactstrap'
const App = () => {
  const [list, setList] = useState(
    MOCK_DATA.sort((a, b) => (a.first_name > b.first_name ? 1 : -1))
    
  );
  const [startIndex , setStartIndex] = useState(0)
  const [endIndex , setEndIndex] = useState(9)

  const [seacthedList, setSeacthedList] = useState(list);
  const [input, setInput] = useState("");
  // display data after filter based on car model year > 2005, sort them. map
  // useEffect(() => {
  //   getData();
  // }, []);
  const getData = () => {
    let data = MOCK_DATA;
    let newData = data.sort((a, b) => (a.first_name > b.first_name ? 1 : -1));
    setList(newData);
    setSeacthedList(list);
    // setSeacthedList(newData);
  };

  const searchData = (_) => {
    console.log("first");

    setSeacthedList(list.filter((a) => a.Car_model === input));
    setInput("");
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const chanePage = (value) => {
    console.log("change Page")
    if(value === 1){
      setStartIndex(0)
      setEndIndex(9)
    }
    if(value === 2){
      setStartIndex(9)
      setEndIndex(10)

    }
  } 
  return (
    <>
      <div>
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          onInput={(e) => handleInput(e)}
          value={input}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={() => searchData()}
        >
          Search
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => getData()}
        >
          Refresh
        </button>
      </div>

      <div>
        <table className="table table-datable table-striped table-bordered table-sm ">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Email</th>
              <th scope="col">Company</th>
              <th scope="col">Car_model</th>
              <th scope="col">Year</th>

              {/* Car_model: "207"
Car_model-year: 2007
Company_name: "Photobean"
email: "bbochx@jiathis.com"
first_name: "Blinni"
gender: "Female"
id: 34
last_name: "Boch" */}
            </tr>
          </thead>
          <tbody >
            {seacthedList &&
              seacthedList.splice(startIndex , endIndex).map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.gender}</td>
                    <td>{item.email}</td>
                    <td>{item.Company_name}</td>
                    <td>{item.Car_model}</td>
                    <td>{item["Car_model-year"]}</td>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <tr>
  <Pagination listTag='tbody' aria-label="Page navigation example">
  <PaginationItem >
    <PaginationLink
      first
      href="#"
    />
   
  </PaginationItem>
  <PaginationItem >
    <PaginationLink
      href="#"
      previous
    />
  </PaginationItem>
  <PaginationItem  onClick={() => chanePage(1)} active>
    <PaginationLink honref="#">
      1
    </PaginationLink>
  </PaginationItem>
  <PaginationItem       onClick={() => chanePage(2)}>
    <PaginationLink href="#">
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationItem disabled>
    <PaginationLink href="#">
      3
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      4
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      5
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      next
    />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      last
    />
  </PaginationItem>
</Pagination>
              <td>Sum</td>
              <td>$180</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default App;
