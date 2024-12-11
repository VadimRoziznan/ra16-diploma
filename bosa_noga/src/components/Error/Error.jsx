import { useEffect } from 'react';
import Swal from 'sweetalert2';

const Error = ({ message, onRetry }) => {

  useEffect(() => {
    const showError = () => {
      Swal.fire({
        icon: 'error',
        title: 'Ошибка',
        confirmButtonText: 'Попробовать снова',
      }).then(() => {
        if (onRetry) {
          onRetry();
        }
      });
    };

    showError();
  }, [message, onRetry]);

  return null;
};

export default Error;