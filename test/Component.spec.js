import React from 'react';
import { shallow } from 'enzyme';

import Component from '~/Component';

describe('Component', () => {

    it('says hello', () => {
        const wrapper = shallow(<Component />);
        const p = wrapper.find('p');

        expect(p.text()).to.equal('ohai');
    });

})
