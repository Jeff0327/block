import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
export default function LoginForm({ isOpen, onClose }) {
  return (
    <>
      <Modal
        size="3xl"
        isOpen={isOpen}
        onOpenChange={onClose}
        radius="lg"
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-gray backdrop-opacity-40",
          base: "border-1 text-white",
          header: "",
          footer: "",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>this is header</ModalHeader>
              <ModalBody>this is body</ModalBody>
              <ModalFooter>this is Footer</ModalFooter>
              <button
                className="w-5 h-5"
                onClick={() => {
                  onClose();
                }}
              ></button>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
