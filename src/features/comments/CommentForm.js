import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateCommentForm } from "../../utils/validateCommentForm";

//We will be creating a modal with form to be filled out for new comments
//The Button component has a boolean prop of outline and onClick handler
//that calls the set State function
//This will cause the modalOpen state to be set to true, which will cause the Modal to open.
//The prop  isOpen={modalOpen} in the Modal component 
//will cause the Modal to open or close depending on the value of modalOpen.
//In the ModalHeader component we have a  toggle prop
//We will pass an arrow function that returns setModalOpen(false). 
//This will cause the modalOpen state to be set back to false when the Modal is closed.
//In the ModalBody we are simply showing the current campsiteId

//This CommentForm function(component) will be rendered in CommentsList.js

const CommentForm = ({campsiteId}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values) => {
      const comment = {
        campsiteId: parseInt(campsiteId),
        rating: values.rating,
        author: values.author,
        text: values.commentText,
      };

      console.log(comment);

      setModalOpen(false);
    }

    return (
      <>
        <Button
          outline
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <i className="fa fa-pencil fa-lg" /> Add Comment
        </Button>
        <Modal isOpen={modalOpen}>
          <ModalHeader
            toggle={() => {
              setModalOpen(false);
            }}
          >
            Add Comment
          </ModalHeader>
          <ModalBody>
            <Formik
              initialValues={{
                rating: undefined,
                author: "",
                commentText: "",
              }}
              onSubmit={handleSubmit}
              validate={validateCommentForm}
            >
              <Form>
                <FormGroup>
                  <Label htmlFor="rating">Rating</Label>
                  <Field name="rating" as="select" className="form-control">
                    <option>Select...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Field>
                  <ErrorMessage name="rating">
                    {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="author">Author</Label>
                  <Field
                    name="author"
                    placeholder="Your Name"
                    className="form-control"
                  />
                  <ErrorMessage name="author">
                    {(msg) => <p className="text-danger">{msg}</p>}
                  </ErrorMessage>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="commentText">Comment</Label>
                  <Field
                    name="commentText"
                    as="textarea"
                    rows="12"
                    className="form-control"
                  />
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </FormGroup>
              </Form>
            </Formik>
          </ModalBody>
        </Modal>
      </>
    );
}

export default CommentForm;