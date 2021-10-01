import React, { useState, useEffect } from "react";
import * as VscIcons from "react-icons/vsc";

const CategoryForm = (props) => {
    const initState = {id: null, name: "", description: "", showMenu: false, isActive: false };
    const [category, setCategory] = useState(props.editing ? props.currentCategory : initState);

    const handleChange = e => {
        const { name, value } = e.target;
        setCategory({ ...category, [name]: value });
    };
    const handleCheck = e => {
        const { name, checked } = e.target;
        setCategory({...category, [name]: checked});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!category.name) return;

        props.editing ? props.updateCategory(category.id, category) : props.addCategory(category);
        resetAddCategory();
    }

    useEffect(() => {
        setCategory(props.currentCategory);
    }, [props]);

    const resetAddCategory = () => {
        props.setEditing(false);
        setCategory(initState);
        props.setCurrentCategory(initState);
    };
    const handleCancel = () => {
        props.setEditing(false);
        setCategory(initState);
        props.setCurrentCategory(initState);
        props.closeModal();
    }

    return(
        <div className='row'>
            <div className="col-lg-10 col-xl-8 mx-auto">
                <div className='card'>
                    <div className="card-header">
                        <button className="modal-close" onClick={props.closeModal}>
                            <VscIcons.VscClose size={24}/>
                        </button>
                        <h5 className="card-title text-center fw-light fs-5 mb-3 pt-3">
                            {props.editing ? "Edit category" : "Add category"}
                        </h5>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-sm">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="name" name="name" value={category.name}
                                               onChange={handleChange}/>
                                        <label htmlFor="name">Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="description" name="description"
                                               value={category.description} onChange={handleChange}/>
                                        <label htmlFor="description">Description</label>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="isActive"
                                               name="isActive" checked={category.isActive} onChange={handleCheck}/>
                                        <label className="form-check-label" htmlFor="isActive">
                                            {category.isActive ? 'Ativo':'Inativo'}
                                        </label>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" id="showMenu"
                                               name="showMenu" checked={category.showMenu} onChange={handleCheck}/>
                                        <label className="form-check-label" htmlFor="showMenu">
                                            {category.showMenu ? 'Exibir no Menu':'Ocultar do Menu'}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className='text-center'>
                                <button className='btn btn-primary'>{props.editing ? "Update category" : "Add category"}</button>
                                {props.editing && (
                                    <button onClick={handleCancel} className="btn btn-outline-secondary">
                                        Cancel
                                    </button>
                                )}
                                <button onClick={props.closeModal} className="btn btn-outline-secondary float-end">Close</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CategoryForm;
