import { Toaster, toast } from 'react-hot-toast';

const notify = (message) => {
  toast.error(message); // Chama o toast com a mensagem de erro
};

const notifySuccess = (message) => {
    toast.success(message); // Toast de sucesso
  };

const Toast = () => {
  return (
    <Toaster 
      position="top-right" 
      reverseOrder={false}
      toastOptions={{
        style: {
          zIndex: 9999, // Define um z-index alto
        },
      }} 
    />
  );
};

export { Toast, notify, notifySuccess };
