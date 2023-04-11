import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Forms, Form, ErrorMessage } from "formik";
import { validateContactForm } from "../utils/validateContactForm";

//This component will be used to create the Contact Us form on the Contact page
//We are using the Formik library which provides us with fatser, c;eaner way to create forms in Recat and exposes State and event handlers
//for us to use via props like:
//initialValues={{}} - this prop expects a JS object for its value. We will define the object inline by using another set of curly braces inside
//the outher curly braces are just to sagnify that we will be writting JS inside of JSX
//Inside this object we will define properties for each of the Fields we will use in our form and initialize them
//Also we will add an onSubmit prop. Once the <Formik> tag receives this prop it knows to call the handleSubmit function when the button to submit the form is clicked
//The handleSubmit function will have 2 arguments - their value will be provided by the Formik element when it calls this function.
//The first argument-value is a JS object which is very similar to the initialValues object, however the properties it contains will have for a value whatever was submitted in the form fields
//The second parameter- resetForm is a destructured function. This is a utility finction that Formik provides to reset the form values.
//Right now we are just building the front end so we don't have a back end to receive our data when submitted so for now we will just console.log the values of the submitted fields
//We will also console.log the data in JSON format-JSON stands for JavaScript Object notation - it is popular text based format for data interchange because actual JS objects
//are created in actual JS run time environment - if you want to transfer the content of one JS object from one computer to another, we can't just send the object, we have to convert it to a string,
//so the computer on the other end can use it to recreate the object on its end. JSON can be used to transfer all kinds of text data, not just JS objects.
//For now we will use the JSON.stringify built in method to turn our "values" into a JSON text string
//Then inside of the Formik tags, we will use <Form> around our form and several <FormGroup> which will surround our different form fields
//Each <FormGroup> will have a boolean property of "row" which will give them the Bootstrap row class

//in the first <Label> tag - the "htmlFor" property in JSX translates to the "for" property in HTML (that was used to match the Label to the form field they are labeling),
//we are assigning it the first property from our object that we created under initialValues and that was firstName
//The 5th <Label> will have a different prop of "check" so React will format it into a checkbox
//If we want to specify offset for the positioning of this col for the 5th Label besieds specifying the size, we can use an object literal by doing this:md={{size: 4, offset: 2 }}
//In the Cols that we added after each Label we will create our form input fields. We start by surrounding them with <Field> component and we give form the bottstrap class of form-control which is used to group form fields
//Each <Field> must also have a name property which value matches the htmlFor property of the <Label> above it
//Also a property of a placeholder that should have the same value as the text in the Label
//The 5th <Label> will have an additional <Field> inside of its starting tag 
//The <Field> will be for the checkbox
//Sincde we need a space between the checkbox and the text "May we contact you?" we are adding an emty string inside of curly braces right after the self-closing <Field> tag because this is JS
//The 5th <Field> component for the "May we contact you" will offer a dropdown selection of choices so her we need to have both starting and closing <Field> tag instead of one self closing one
//The starting  5th <Field> tag needs a name="contactType" and "as" property equal to "select" which will transpile into the <select> element in HTML
//Betweeen the start and end <Field> tags we will add the built-in JSX element of <option> which will create the selection options
//The 6th <Field> will also have an "as" property which will transpile to the HTML textarea element. The "rows" property is NOT Bottstrap related, it relates to how many rows of content will be in the text area


//The starting Formik tag(component) will also contain a validate property which will be set up to hold the validateConatctForm function we created
//in the validateContactForm.js in the "utils" folder. This function will be used to validate if what has been entered into the input fields passes certain conditions

//Then right under each Field component we will enter an ErrorMessage component from the Formik library.
//This ErrorMessage component MUST have a "name" property which must match the name property of the Field component above it that we are doing the validation for
//Between the start and end ErrorMessage component will will write an arrow function with an argument of "msg"
//Formik will take the errors object,from the validateContactForm function, and its specific error messages we set up for each field's validation
//and will pass this "msg" here to be displayed if needed

//This component will be rendered in the ContactPage.js component

const ContactForm = () => {
    const handleSubmit = (values, {resetForm}) => {
        console.log("form values:", values);
        console.log("inJSON format:", JSON.stringify(values));
        resetForm();
    }

    return (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNum: "",
          email: "",
          agree: false,
          contactType: "By Phone",
          feedback: "",
        }}
        onSubmit={handleSubmit}
        validate={validateContactForm}
      >
        <Form>
          <FormGroup row>
            <Label htmlFor="firstName" md="2">
              First Name
            </Label>
            <Col md="10">
              <Field 
               name="firstName"
               placeholder="First Name" 
               className="form-control"
             />
             <ErrorMessage name="firstName">
                {(msg) => <p className="text-danger">{msg}</p>}
             </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="lastName" md="2">
              Last Name
            </Label>
            <Col md="10">
              <Field 
                name="lastName"
                placeholder="Last Name"
                className="form-control" 
            />
            <ErrorMessage name="lastName">
                {(msg) => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="phoneNum" md="2">
              Phone
            </Label>
            <Col md="10">
              <Field 
                name="phoneNum"
                placeholder="Phone"
                className="form-control" 
             />
             <ErrorMessage name="phoneNum">
                {(msg) => <p className="text-danger">{msg}</p>}
             </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="email" md="2">
              Email
            </Label>
            <Col md="10">
              <Field 
                name="email"
                placeholder="Email"
                type="email"
                className="form-control" 
              />
              <ErrorMessage name="email">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label check md={{ size: 4, offset: 2 }}>
                <Field 
                  name="agree"
                  type="checkbox"
                  className="form-check-input"
                />{" "}
              May we contact you?
            </Label>
            <Col md="4">
              <Field 
                name="contactType"
                as="select"  
                className="form-control" 
              >
                <option>By Phone</option>
                <option>By Email</option>
              </Field>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="feedback" md="2">
              Your Feedback
            </Label>
            <Col md="10">
              <Field 
                name="feedback"
                as="textarea"
                rows="12"
                className="form-control" 
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size:10, offset:2 }}>
                <Button type="submit" color="primary">
                    Send Feedback
                </Button>
            </Col>
          </FormGroup>
        </Form>
      </Formik>
    );

}

export default ContactForm