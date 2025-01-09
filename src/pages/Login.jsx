import {Formik, Form,  Field} from 'formik';
import * as Yup from 'yup';

const login = () =>{
       return ( 
        <Formik>
           initialValues={{
              email: '',
              password: ''
           }}           
           validationSchema={Yup.object({
              email: Yup.string().email('Invalid email address').required('Required'),
              password: Yup.string().required('Required'),
           })
           }
          
        <Form>
            <div> 
                <Field name="email">
                     <label htmlFor="email">Enter your email</label>

                </Field>
            </div>
            <div>
                <Field>

                </Field>
            </div>
         <button> Submit</button>
        </Form>

        </Formik>
);
};
export default login;