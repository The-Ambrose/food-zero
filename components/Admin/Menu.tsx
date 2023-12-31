"use client";
import { ParamsQuery, IMenu } from "@/typings";
import { useForm } from "@/hooks/useForm";
import UploadFile from "../General/UploadFile";

interface props {
  handleSave: (id: string | undefined, values: any) => void;
  params?: ParamsQuery | null;
}
export const Menu = ({ handleSave, params }: props) => {
  const { handleInputChange, values, handleChange } = useForm<IMenu>({
    menuSectionTitle: params?.getParams?.menuSectionTitle || "",
    menuSectionSubtitle: params?.getParams?.menuSectionSubtitle || "",
    backgroundMenu: params?.getParams?.backgroundMenu || ""
  });
  return (
    <>
      <div className="admin-general-header">
        <h1 className="admin-general-header__title">Menú</h1>
        <button onClick={() => handleSave(params?.getParams.id, values)}>
          Guardar
        </button>
      </div>
      <div className="admin-general-container">
        {Object.entries(values).map(([key, value]) => (
          <div key={key} className="admin-general-container__card">
            <label htmlFor={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            {key === "backgroundMenu" ? (
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
    </>
  );
};
