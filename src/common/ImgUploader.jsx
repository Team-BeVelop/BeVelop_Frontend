import ImageUploading from "react-images-uploading";
import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";
import { TiUpload } from "react-icons/ti";
import { AiOutlinePlus } from "react-icons/ai";
import "./style/uploader.css";

const Upload = styled(AiOutlinePlus)`
    position: absolute;
    right: 1rem;
    bottom: 2rem;
    font-size: 2.5rem;
    color: #fff;
    background: #8b95a1;
    border-radius: 50%;
`;

const Delete = styled(TiDeleteOutline)`
    position: absolute;
    z-index: 999;
    right: 0rem;
    font-size: 3rem;
    color: #fff;
    background-color: #000;
    border-radius: 2rem;
`;

const ImgUploader = ({ maxNumber, images, setImages, Thumb, text, txt }) => {
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        if (maxNumber < imageList.length) {
            alert(`${txt} 이미지는 최대 ${maxNumber}개까지 입니다`);
        } else {
            setImages(imageList);
        }
    };

    return (
        <>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        {/* <button onClick={onImageRemoveAll}>
                            Remove all images
                        </button> */}
                        {imageList.length === 0 ? (
                            <div
                                onClick={onImageUpload}
                                {...dragProps}
                                className="image-item"
                            >
                                <p className="sub">{text}</p>
                                <Upload />
                            </div>
                        ) : imageList.length === maxNumber ? (
                            <div
                                onClick={e => {
                                    e.stopPropagation();
                                    alert(
                                        `이미지는 최대 ${maxNumber}개까지 입니다`
                                    );
                                }}
                                {...dragProps}
                                className="image-item"
                            >
                                <ul className={`img_Ul_${Thumb}`}>
                                    {imageList.map((image, index) => (
                                        <li
                                            className={`img_Li ${Thumb}`}
                                            onClick={e => {
                                                e.stopPropagation();
                                                onImageRemove(index);
                                            }}
                                        >
                                            <img
                                                className={`img ${Thumb}`}
                                                src={image["data_url"]}
                                                alt=""
                                            />
                                            {/* <button
                                                onClick={() =>
                                                    onImageRemove(index)
                                                }
                                            >
                                                Remove
                                            </button> */}
                                            {/* <div className="image-item__btn-wrapper">
                                                <button
                                                    onClick={() =>
                                                        onImageUpdate(index)
                                                    }
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        onImageRemove(index)
                                                    }
                                                >
                                                    Remove
                                                </button>
                                            </div> */}
                                            <Delete />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div
                                onClick={e => {
                                    e.stopPropagation();
                                    onImageUpload();
                                }}
                                {...dragProps}
                                className="image-item"
                            >
                                <ul className={`img_Ul_${Thumb}`}>
                                    {imageList.map((image, index) => (
                                        <li
                                            className="img_Li"
                                            onClick={e => {
                                                e.stopPropagation();
                                                onImageRemove(index);
                                            }}
                                        >
                                            <Delete />
                                            <img
                                                className="img"
                                                src={image["data_url"]}
                                                alt=""
                                            />
                                        </li>
                                    ))}
                                    <Upload />
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </ImageUploading>
        </>
    );
};

export default ImgUploader;
