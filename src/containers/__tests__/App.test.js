import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { App } from '../App'
import Picker from '../../components/Picker'

describe('App', () => {
    it('renders without crashing given the required props', () => {
        const props = {
            isFetching: false,
            dispatch: jest.fn(),
            selectedSubreddit: 'reactjs',
            posts: []
        }
        const wrapper = shallow(<App {...props}></App>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('sets the selectSubreddit prop as the "value" luprop on the Picker component',() => {
        const props = {
            isFetching: false,
            dispatch: jest.fn(),
            selectSubreddit: 'reactjs',
            posts: []
        }
        const wrapper = shallow(<App {...props}></App>)
        const PickComponnent = wrapper.find(Picker)
        expect(PickComponnent.props().value).tobe(props.selectSubreddit)
    })
})