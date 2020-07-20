import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";

import { fetchAll, updateItem, saveItem } from "../actions/programmes";
import { fetchAll as fetchFilieres } from "../actions/filieres";

import Editable from "../components/Editable";

const Programme = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.filieres.isLoading);
  const filieres = useSelector((state) => state.filieres.items);
  const storeItems = useSelector((state) => state.programmes.items);
  const [items, setitems] = useState([]);
  const [isEdited, setisEdited] = useState(false);
  const [isCreating, setisCreating] = useState(false);

  useEffect(() => {
    dispatch(fetchFilieres());
    dispatch(fetchAll());
  }, []);
  useEffect(() => {
    setitems(storeItems);
  }, [storeItems]);

  // console.log(items);
  const handleTextEdited = (id, newItem) => {
    setisEdited(true);
    const newItems = items.map((item) => {
      if (item.id !== id) return item;
      return newItem;
    });
    setitems(newItems);
  };
  const saveItems = () => {
    const promises = items.map((item) => {
      if (item.id == "NEW") {
        delete item.id;
        return dispatch(saveItem(item));
      }
      return dispatch(updateItem(item));
    });
    Promise.all(promises).then(() => {
      setisEdited(false);
      setisCreating(false);

      // alert("UPDATED SUCCESSFULLY");
    });
  };
  const newItem = () => {
    setisCreating(true);
    //Here we'll show the line of a new item
    const newItems = items.concat([{ id: "NEW", filiere_id: 1 }]);
    setitems(newItems);
  };
  const renderItems = () => {
    return items.map((item, index) => (
      <tr key={index}>
        <td>{item.id}</td>
        <td>
          <Editable
            text={item.name}
            handleTextEdited={(text) =>
              handleTextEdited(item.id, { ...item, name: text })
            }
          />
        </td>
        <td>
          <Editable
            text={item.description}
            handleTextEdited={(text) =>
              handleTextEdited(item.id, { ...item, description: text })
            }
          />
        </td>
        <td>
          <input
            type="checkbox"
            onChange={(e) =>
              handleTextEdited(item.id, {
                ...item,
                active: e.target.checked ? 1 : 0,
              })
            }
            checked={item.active == 1}
          />
        </td>
        <td>
          <select
            onChange={(e) =>
              handleTextEdited(item.id, {
                ...item,
                filiere_id: Number(e.target.value),
              })
            }
            value={item.filiere_id}
          >
            {" "}
            {filieres.map((f, idx) => (
              <option key={idx} value={f.id}>
                {f.name}
              </option>
            ))}{" "}
          </select>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Active</th>
            <th>filiere_id</th>
          </tr>
        </thead>
        <tbody>{renderItems()}</tbody>
        <tfoot>
          {isCreating || (
            <Button variant="primary" onClick={newItem}>
              + New
            </Button>
          )}
          {isEdited && (
            <Button variant="success" onClick={saveItems}>
              Save
            </Button>
          )}
        </tfoot>
      </Table>
    </div>
  );
};

export default Programme;
