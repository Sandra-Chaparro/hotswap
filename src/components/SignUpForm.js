import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const SignUpForm= ({ onSubmit }) => {
    // form validation rules 
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
            
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return (
        <form className="formFormat" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password (6 characters minimum):</label>
                <input
                    name="password"
                    type="password"
                    {...register('password')}
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password (passwords must match):</label>
                <input
                    name="confirmPassword"
                    type="password"
                    {...register('confirmPassword')}
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
            </div>
            <div className="form-group">
                <label htmlFor="text">Username:</label>
                <input
                    name="username"
                    type="text"
                    className='form-control'
                />
            </div>
            <div className="form-group">
                <label htmlFor="text">Shipping address line 1</label>
                <input
                    name="shippingLineOne"
                    type="text"
                    className='form-control'
                />
            </div>
            <div className="form-group">
                <label htmlFor="text">Shipping address line 2</label>
                <input
                    name="shippingLineTwo"
                    type="text"
                    className='form-control'
                />
            </div>
            <div class="flex-container">
            <div class="flex-child1">
            <div className="form-group">
                <label htmlFor="text">City</label>
                <input
                    name="city"
                    type="text"
                    className='form-control form-control-sm'
                />
            </div>
            </div>
            <div class="flex-child2">
            <div className="form-group">
            <label for="state">State</label>
			<select className="form-control form-control-sm stateBut" id="state" name="state"><option value="---">---</option><option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option>
            <option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option>
            <option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option>
            <option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option>
            <option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option>
            <option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option>
            <option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option>
            <option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option>
            <option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option>
            <option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option>
            <option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option>
            <option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option>
            <option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option></select>
            </div>
            </div>
            <div class="flex-child3">
            <div className="form-group">
                <label htmlFor="number">Zip</label>
                <input
                    name="city"
                    type="number"
                    maxLength="5"
                    minLength="5"
                    className='form-control form-control-sm'
                />
            </div>
            </div>
            </div>
            <div className="form-group">
                <button id="signUp" className="form-control btn btn-primary signupfrmbtn" type="submit">
                    Sign Up
                </button>
            </div>
        </form>
    );
};
export default SignUpForm;