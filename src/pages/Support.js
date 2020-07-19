import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { fetchAll, updateItem, saveItem } from "../actions/supports";
import { fetchAll as fetchModules } from "../actions/modules";
import Editable from "../components/Editable";

const Support = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.filieres.isLoading);
  const modules = useSelector((state) => state.modules.items);
  const storeItems = useSelector((state) => state.supports.items);
  const [items, setitems] = useState([]);
  const [isEdited, setisEdited] = useState(false);
  const [isCreating, setisCreating] = useState(false);

  useEffect(() => {
    dispatch(fetchModules());
    dispatch(fetchAll());
  }, []);
  useEffect(() => {
    setitems(storeItems);
  }, [storeItems]);

  console.log(items);
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

      alert("UPDATED SUCCESSFULLY");
    });
  };
  const newItem = () => {
    setisCreating(true);
    //Here we'll show the line of a new item
    const newItems = items.concat([{ id: "NEW" }]);
    setitems(newItems);
  };
  const renderItems = () => {
    return items.map((item, index) => (
      <tr key={index}>
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
          {" "}
          <Editable
            text={item.type}
            handleTextEdited={(text) =>
              handleTextEdited(item.id, { ...item, type: text })
            }
          />
        </td>
        <td>
          {" "}
          <Editable
            text={item.url}
            handleTextEdited={(text) =>
              handleTextEdited(item.id, { ...item, url: text })
            }
          />
        </td>
        <td>
          {" "}
          <Editable
            text={item.urlContentType}
            handleTextEdited={(text) =>
              handleTextEdited(item.id, { ...item, urlContentType: text })
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
                module_id: e.target.value,
              })
            }
            value={item.module_id}
          >
            {" "}
            {modules.map((m, idx) => (
              <option key={idx} value={m.id}>
                {m.name}
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
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Url</th>
            <th>UrlContentType</th>
            <th>Active</th>
            <th>Module</th>
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

export default Support;
