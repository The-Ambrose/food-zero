"use client";
import { ParamsQuery, IAbout } from "@/typings";
import { useForm } from "@/hooks/useForm";
import UploadFile from "../General/UploadFile";

interface props {
  handleSave: (id: string | undefined, values: any) => void;
  params?: ParamsQuery | null;
}
export const About = ({ handleSave, params }: props) => {
  const images: string[] = ["backgroundAbout", "aboutHeaderSectionImage"];
  const { handleInputChange, values, handleChange } = useForm<IAbout>({
    backgroundAbout: params?.getParams?.backgroundAbout || "",
    aboutSectionTitle: params?.getParams?.aboutSectionTitle || "",
    aboutSectionParagraph: params?.getParams?.aboutSectionParagraph || "",
    aboutBannerVideoTitle: params?.getParams?.aboutBannerVideoTitle || "",
    aboutBannerVideoParagraph:
      params?.getParams?.aboutBannerVideoParagraph || "",
    aboutBannerVideoId: params?.getParams?.aboutBannerVideoId || "",
    aboutHeaderSectionTitle: params?.getParams?.aboutHeaderSectionTitle || "",
    aboutHeaderSectionParagraph:
      params?.getParams?.aboutHeaderSectionParagraph || "",
    aboutHeaderSectionImage: params?.getParams?.aboutHeaderSectionImage || ""
  });
  return (
    <>
      <div className="admin-general-header">
        <h1 className="admin-general-header__title">About</h1>
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
    </>
  );
};
