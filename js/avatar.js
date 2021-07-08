const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_IMG = 'img/muffin-grey.svg';

const fileChooserAvatar = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview');
const fileChooserOffers = document.querySelector('.ad-form__upload input[type=file]');
const offersPreview = document.querySelector('.ad-form__photo');

const createImageNode = (wrapper) => {
  const image = document.createElement('img');
  image.src = '';
  image.width = 40;
  image.height = 44;

  if (wrapper === offersPreview) {
    image.width = 70;
    image.height = 70;
    image.alt = 'Фотография жилья';
  }

  if (wrapper === avatarPreview) {
    image.alt = 'Аватар пользователя';
  }

  return wrapper.append(image);
};

const removeImageNode = (wrapper) => {
  if (wrapper.children.length !== 0) {
    wrapper.innerHTML = '';
  }
};

const uploadImage = (input, wrapper) => {
  input.addEventListener('change', () => {
    const [file] = input.files;
    const fileName = file.name.toLowerCase();
    const isMatche = FILE_TYPES.some((item) => fileName.endsWith(item));

    if (isMatche) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        removeImageNode(wrapper);
        createImageNode(wrapper);
        wrapper.firstChild.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

uploadImage(fileChooserAvatar, avatarPreview);
uploadImage(fileChooserOffers, offersPreview);

const resetImage = () => {
  avatarPreview.firstChild.src = DEFAULT_IMG;
  offersPreview.innerHTML = '';
};

export { resetImage };
