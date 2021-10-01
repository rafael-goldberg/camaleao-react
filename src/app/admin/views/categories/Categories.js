import React, {useEffect, useState} from "react";
import ModalDefault from "../../../components/ModalDefault";
import CategoriesList from "./CategoriesList";
import CategoryForm from "./CategoryForm";

const fakeCategories = [
    {id:1, name:"Category 1", description:"", showMenu:false, isActive:true},
    {id:2, name:"Category 2", description:"Short optional description", showMenu:false, isActive:true},
    {id:3, name:"Category 3", description:"", showMenu:false, isActive:false},
];

const Categories = () => {
    const [modal, setModal] = useState(false);
    const initState = {id: null, name: "", description: "", showMenu: false, isActive: false };
    const [categories, setCategories] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(initState);

    useEffect(() => {
        setCategories(fakeCategories);
    },[]);

    const openModal = () => {
        setModal(true);
    }
    const closeModal = () => {
        setModal(false);
    }

    const addCategory = (category) => {
        category.id = categories.length + 1;
        setCategories([...categories, category]);
    }
    const deleteCategory = (id) => {
        setEditing(false);
        setCategories(categories.filter(category => category.id !== id));
    }
    const editRow = (category) => {
        setEditing(true);
        openModal();
        setCurrentCategory(category);
    }
    const updateCategory = (id, updatedCategory) => {
        setEditing(false);
        setCategories(categories.map(category => (category.id === id ? updatedCategory : category)));
        closeModal();
    }

    return(
        <div>
            <figure>
                <blockquote className="blockquote">
                    <h3>
                        Categories -
                        <small className="text-muted ms-2" style={{fontSize:'18px'}}>
                            {editing ? "Edit category" : "Add category"}
                        </small>
                    </h3>
                </blockquote>
                {/*
                <figcaption className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
                */}
            </figure>

            <button onClick={openModal}>New</button>
            <CategoriesList
                categories={categories}
                editRow={editRow}
                deleteCategory={deleteCategory}
            />

            <ModalDefault show={modal}>
                <CategoryForm
                    closeModal={closeModal}
                    editing={editing}
                    setEditing={setEditing}
                    currentCategory={currentCategory}
                    setCurrentCategory={setCurrentCategory}
                    updateCategory={updateCategory}
                    addCategory={addCategory}
                />
            </ModalDefault>
        </div>
    )
}


export default Categories;
