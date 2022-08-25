import { Button, Modal } from "react-bootstrap";

interface MyModalProps {
  title: string;
  body: string;
  close: string;
  save: string;
  onClose(): void;
  onSave(): void;
  showToggle: boolean;
}

export function MyModal({
  title,
  body,
  close,
  save,
  onClose,
  onSave,
  showToggle,
}: MyModalProps) {
  return (
    <Modal show={showToggle}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          {close}
        </Button>
        <Button variant="primary" onClick={onSave}>
          {save}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
