import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";

import { fetchAll, updateItem, saveItem } from "../actions/modules";
import { fetchAll as fetchFilieres } from "../actions/filieres";
import Editable from "../components/Editable";

const Module = ({ match }) => {
  const dispatch = useDispatch();
  const filieres = useSelector((state) => state.filieres.items);
  const storeItems = useSelector((state) => state.modules.items);
  const [items, setitems] = useState([]);
  const [isEdited, setisEdited] = useState(false);
  const [isCreating, setisCreating] = useState(false);

  useEffect(() => {
    dispatch(fetchFilieres());
    dispatch(fetchAll());
  }, []);
  useEffect(() => {
    let relatedItems = [...storeItems];
    if (match.params.filiere_id) {
      relatedItems = relatedItems.filter(
        (m) => m.filiere_id == match.params.filiere_id
      );
    }
    setitems(relatedItems);
  }, [storeItems, match.params.filiere_id]);

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
    const newItems = items.concat([
      { id: "NEW", annee: 1, filiere_id: match.params.filiere_id || 1 },
    ]);
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
          <Editable
            text={item.charge_horaire}
            handleTextEdited={(text) =>
              handleTextEdited(item.id, { ...item, charge_horaire: text })
            }
          />
        </td>
        <td>
          <select
            onChange={(e) =>
              handleTextEdited(item.id, {
                ...item,
                annee: e.target.value,
              })
            }
            value={item.annee}
          >
            <option value={1}>1ere annee</option>
            <option value={2}>2ere annee</option>
            <option value={3}>3eme annee</option>
            <option value={4}>4eme annee</option>
            <option value={5}>5eme annee</option>
          </select>
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
                filiere_id: e.target.value,
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
            <th>Charge Horaire</th>
            <th>Annee</th>
            <th>Active</th>
            <th>Filiere Id</th>
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

export default Module;
