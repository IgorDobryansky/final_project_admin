import React, { useState } from "react";
import PropTypes from "prop-types";

import api from "../../http";

function Category({ category }) {
  const [disabled, setDisabled] = useState(false);

  return (
    <tr>
      <td>{category.name}</td>
      <td>{category.id}</td>
      <td>{category.parentId}</td>
      <td>
        <button
          onClick={() => {
            setDisabled(true);
            api
              .delete(`/catalog/${category.id}`)
              .then(() => setDisabled(false));
          }}
          type="button"
          disabled={disabled}
          style={{ padding: "3px 5px" }}
        >
          {disabled ? "Deleting..." : "Delete category"}
        </button>
      </td>
    </tr>
  );
}

Category.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    parentId: PropTypes.string
  }).isRequired
};

export default Category;
