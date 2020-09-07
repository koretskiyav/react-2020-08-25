import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from './reviews';
import { restaurants } from '../../fixtures';

//const product = restaurants[0].menu[0];

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {
    it('should render', () => {
        const wrapper = mount(<Reviews reviews={reviews} />);
        expect(wrapper.find('[data-id="rewiews"]').length).toBe(1);
    });
    
});
