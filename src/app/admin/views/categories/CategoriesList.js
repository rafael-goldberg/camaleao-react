import React from "react";

const CategoriesList = (props) => {
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Show Menu</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {props.categories.length > 0 ? (
                    props.categories.map(category => (
                        <tr key={category.id}>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td>{category.isActive === true ? 'Ativo':'Inativo'}</td>
                            <td>{category.showMenu === true ? 'Exibir':'Ocultar'}</td>
                            <td>
                                <button className="button muted-button" onClick={() => {props.editRow(category);}}>
                                    Edit
                                </button>
                                <button className="button muted-button" onClick={() => props.deleteCategory(category.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={4}>No users</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}
export default CategoriesList;
