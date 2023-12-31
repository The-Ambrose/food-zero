import React, { use, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { IMeatProcess, MeatProcessQuery } from '@/typings';
import { queryGetAllMeatProcess } from '@/utils/querys';
import { useForm } from '@/hooks/useForm';
import UploadFile from '../General/UploadFile';
import { deleteMeatProcessMutation } from '@/utils/mutations';
import { toast } from 'react-toastify';

interface props {
    handleSaveForm: (id: string | undefined, values: any, mutationName: string, reloadData?: (data: any) => void) => Promise<void>;
}

export const AdminMeatProcess = ({ handleSaveForm }: props) => {
    const { loading, error, data } = useQuery<MeatProcessQuery>(queryGetAllMeatProcess);   
    const [deleteMeat] = useMutation(deleteMeatProcessMutation);
    const { handleInputChange, values, handleChange } = useForm<IMeatProcess>({
        name: "",
        description: "",
        order: 0,
        image: "",
        meatData: data?.getAllMeatProcess || []
    });
    const { meatData } = values;
    const images = [
        "image"
    ];
    const handleChangeMeatProcess = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;
        const newData = [...meatData];
        newData[index][name] = value;
        handleChange({ meatData: newData });
    }
    const handleImageChange = (newData: any) => {
        const newMeat = [...meatData];
        newMeat[newData.index]['image'] = newData.image;
        handleChange({ meatData: newMeat });
    }
    const handleDelete = async (id: string) => {  
        try {
            const { data } = await deleteMeat({
                variables: {
                    deleteMeatProcessId: id
                }
            });
            const newMeat = [...meatData];
            const updatedMeat = newMeat.filter(item => item.id !== id);
            handleChange({ meatData: updatedMeat });
            toast.success('Registro eliminado correctamente', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            console.error("Error updating params:", error);
        }
    };
    const reloadData = (data: any) => {   
        const newMeat = [...meatData, {
            description: data.createMeatProcess.description,
            id: data.createMeatProcess.id,
            image: data.createMeatProcess.image,
            name: data.createMeatProcess.name,
            order: data.createMeatProcess.order
        }];
        handleChange({ meatData: newMeat, name: "", description: "", order: 0, image: "" });
    }
    useEffect(() => {
        handleChange({
            meatData: data?.getAllMeatProcess.map(data => ({
                id: data.id,
                name: data.name,
                description: data.description,
                order: data.order,
                image: data.image
            })) || []
        });
    }, [data]);
    return (
        <>
            <div className="admin-general-header">
                <h1 className="admin-general-header__title">Proceso</h1>
                <button onClick={() => handleSaveForm(undefined, { ...values, order: parseInt(values.order.toString()) }, 'createMeatProcess', reloadData)}>
                    Crear
                </button>
            </div>
            <div className='data-admin-container'>
                <div className="admin-form-container-create">
                    {Object.entries(values).map(([key, value]) => (
                        key !== 'meatData' &&
                        <div key={key} className="admin-form-container-create__card">
                            <label htmlFor={key}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </label>
                            {images.includes(key) ? (
                                <UploadFile
                                    url={value}
                                    name={key}
                                    key={key}
                                    onChange={handleChange}
                                />
                            ) : (
                                <input
                                    type="text"
                                    name={key}
                                    value={value}
                                    onChange={handleInputChange}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="admin-form-container-create update">
                    {meatData && meatData.map((meat, index) => (
                        <div key={index} className='update__container'>
                            <div className='update__container__form'>
                                <div className="admin-form-container-create__card">
                                    <label htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={meat.name}
                                        onChange={(e) => handleChangeMeatProcess(e, index)}
                                    />
                                </div>
                                <div className="admin-form-container-create__card">
                                    <label htmlFor="description">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        name="description"
                                        value={meat.description}
                                        onChange={(e) => handleChangeMeatProcess(e, index)}
                                    />
                                </div>
                                <div className="admin-form-container-create__card">
                                    <label htmlFor="order">
                                        Order
                                    </label>
                                    <input
                                        type="text"
                                        name="order"
                                        value={meat.order}
                                        onChange={(e) => handleChangeMeatProcess(e, index)}
                                    />
                                </div>
                                <div className="admin-form-container-create__card">
                                    <label htmlFor="image">
                                        Image
                                    </label>
                                    <UploadFile
                                        url={meat.image}
                                        name="image"
                                        key="image"
                                        index={index}
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>
                            <div className="update__container__button">
                                <button onClick={() => handleSaveForm(meat.id, meat, 'updateMeatProcess')}>
                                    Actualizar
                                </button>
                                <button className="delete" onClick={() => handleDelete(meat.id)}>
                                    Borrar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
