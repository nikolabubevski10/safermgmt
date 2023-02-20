import React, { useState } from 'react';
import noImage from '../../assets/icons/no-image.svg';
import minus from '../../assets/icons/minus.png';
import plus from '../../assets/icons/plus.png';
import { useTranslation } from 'react-i18next';
import Cropper from 'react-cropper';
import Button from '../buttons/CustomButton';
import '../../../../../node_modules/cropperjs/dist/cropper.css';
import './CropperSliderstyles.css';
import {
  ModalWrapper,
  ModalContent,
  Container,
  ModalHeader,
  HeadTitle,
  HeadSubTitle,
  ModalBody,
  UploadContainer,
  UploadText,
  UploadInstruction,
  CustomButton,
  ErrorContainer,
  RangeSliderCover,
} from './CustomModalStyles';
import RangeSlider from '../rangeSlider/RangeSlider';
interface Props {
  title: string;
  show: boolean;
  setShow: (show: boolean) => void;
  subTitle: string;
  // eslint-disable-next-line
  setProfile: (x: any) => void;
}
interface Cropper {
  scropped: boolean;
  disabled: boolean;
  ready: boolean;
  reloading: boolean;
  replaced: boolean;
  sized: boolean;
  sizing: boolean;
  isImg: boolean;
}

const CustomModal: React.FC<Props> = (props: Props) => {
  const { show, title, setShow, subTitle, setProfile } = props;
  const [error, setError] = useState(false);
  const [curruntFile, setFile] = useState(null);
  // eslint-disable-next-line
  const [cropper, setCropper] = useState<Cropper | any>();
  const [previewImage, setPreviewImage] = useState<string>();
  const [slideValue, setSlideValue] = useState(0);

  const { t } = useTranslation();
  const UploadTitle = t('Upload or drop photo here');
  const UploadInfo = t('250x250 Min size/ 5 MB Max');
  const UploadError = t('Please choose a smaller size photo');
  const UploadButtonText = t('Upload photo');
  const SaveButtonText = t('Save photo');
  const ChangePhotoText = t('Change photo');

  const onSave = () => {
    if (curruntFile) {
      setProfile(cropper.getCroppedCanvas().toDataURL());
    }
    setFile(null);
    setPreviewImage('');
    setShow(false);
    setSlideValue(0);
    setError(false);
  };
  // eslint-disable-next-line
  const handleImageChange = (event?: any) => {
    if (curruntFile) {
      setFile(null);
    }
    // eslint-disable-next-line
    const file: any = event.currentTarget.files[0];
    if (file.size > 1000000) {
      setError(true);
    } else {
      try {
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewImage(reader.result?.toString());
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.log(error);
      }
      setError(false);

      setFile(file);
    }
  };

  const onChangePhoto = () => {
    setFile(null);
    setPreviewImage('');
    setSlideValue(0);
  };

  return (
    <Container>
      {show ? (
        <ModalWrapper>
          <ModalContent>
            <ModalHeader>
              <HeadTitle>
                <h1>{title}</h1>
                <i
                  onClick={() => {
                    setShow(false);
                    setError(false);
                    setFile(null);
                    setPreviewImage('');
                    setShow(false);
                    setSlideValue(0);
                  }}
                  className="fas fa-times"
                ></i>
              </HeadTitle>
              <HeadSubTitle>
                <span>{subTitle}</span>
              </HeadSubTitle>
            </ModalHeader>
            <ModalBody isError={error}>
              <UploadContainer isFile={curruntFile !== null}>
                {!curruntFile && (
                  <>
                    <img src={noImage} alt="image-upload" />
                    <UploadText>{UploadTitle}</UploadText>
                    <UploadInstruction>{UploadInfo}</UploadInstruction>
                  </>
                )}

                {curruntFile && (
                  <Cropper
                    src={previewImage}
                    viewMode={1}
                    preview=".img-preview"
                    style={{ height: 200, width: '100%' }}
                    aspectRatio={1 / 1}
                    guides={true}
                    center={false}
                    cropBoxResizable={false}
                    dragMode="move"
                    cropBoxMovable={false}
                    zoomOnTouch={false}
                    zoomOnWheel={false}
                    zoomable={true}
                    zoomTo={slideValue / 100}
                    onInitialized={(instance) => {
                      setCropper(instance);
                    }}
                    background={false}
                  />
                )}
              </UploadContainer>
              {!curruntFile && (
                <input
                  id="fileImage"
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={(e) => handleImageChange(e)}
                  className="upload-option"
                />
              )}
            </ModalBody>
            {error && (
              <ErrorContainer>
                <span>{UploadError}</span>
              </ErrorContainer>
            )}
            {curruntFile && (
              <RangeSliderCover className="range-Slider">
                <img src={minus} alt="minus-zoom" />
                <RangeSlider
                  slideValue={slideValue}
                  setSlideValue={setSlideValue}
                />
                <img src={plus} alt="plus-zoom" />
              </RangeSliderCover>
            )}
            <CustomButton>
              <Button onClick={onSave}>
                {curruntFile ? SaveButtonText : UploadButtonText}
              </Button>
              {curruntFile && (
                <span onClick={onChangePhoto}>{ChangePhotoText}</span>
              )}
            </CustomButton>
          </ModalContent>
        </ModalWrapper>
      ) : null}
    </Container>
  );
};

export default CustomModal;
