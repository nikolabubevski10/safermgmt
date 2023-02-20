import { Reducer } from 'redux';
import _ from 'lodash';
import { IPerson } from './types';
import * as Actions from './GeneratorActions';
import getPersonText from '../components/search-card/utils/getPersonText';
import prepareGetSchoolUsersData from './utils/prepareGetSchoolUsersData';
import roleSelectionOptions from './assets/roleSelectionOptions';
import formatContact from '../components/search-card/components/results/components/student-contact-result/utils/formatContact';

export type State = {
  currentPersonId: string | null;
  isLoading: boolean;
  isShowingResults: boolean;
  persons: IPerson[];
  resultHasBeenSelected: boolean;
  roleFilter: string;
  searchText: string;
  currentContactId: string | null;
};

const initialState = {
  currentPersonId: null,
  isLoading: false,
  isShowingResults: false,
  persons: [],
  resultHasBeenSelected: false,
  roleFilter: roleSelectionOptions.students.value,
  searchText: '',
  currentContactId: null,
};

const GeneratorReducer: Reducer<State, Actions.GeneratorActionTypes> = (
  state: State = initialState,
  action: Actions.GeneratorActionTypes,
) => {
  switch (action.type) {
    case Actions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.bool,
      };
    }

    case Actions.GET_SCHOOL_USERS_FAIL: {
      return {
        ...state,
        person: null,
      };
    }

    case Actions.HANDLE_SEARCH_TEXT_CHANGE: {
      return {
        ...state,
        searchText: action.e.target.value,
        isShowingResults: !!action.e.target.value,
        resultHasBeenSelected: false,
      };
    }

    case Actions.GET_SCHOOL_USERS_SUCCESS: {
      const preparedPersons = prepareGetSchoolUsersData(
        action.data,
        action.schoolId,
      );
      return {
        ...state,
        persons: preparedPersons,
      };
    }

    case Actions.SELECT_SEARCH_RESULT: {
      const { persons } = state;
      const currentPerson = persons.find(
        (person) => person.id === action.newCurrentPersonId,
      );

      const currentPersonString = currentPerson
        ? getPersonText(currentPerson)
        : '';

      return {
        ...state,
        currentPersonId: action.newCurrentPersonId,
        isShowingResults: false,
        resultHasBeenSelected: true,
        searchText: currentPersonString,
        currentContactId: null,
      };
    }

    case Actions.SELECT_STUDENT_CONTACT_RESULT: {
      const { persons } = state;

      const student = persons.find(
        (person) => person.id === action.newCurrentPersonId,
      );

      const studentId = student?.id || null;

      const contacts = student?.contacts || [];

      if (contacts.length === 0) return state;

      const contact = contacts.find(
        (contact) => contact.id === action.newCurrentContactId,
      );

      const contactId = contact?.id || null;

      const contactString = contact ? formatContact(contact) : '';

      return {
        ...state,
        isShowingResults: false,
        resultHasBeenSelected: true,
        searchText: contactString,
        currentPersonId: studentId,
        currentContactId: contactId,
      };
    }

    case Actions.CLEAR_SEARCH_TEXT: {
      return {
        ...state,
        searchText: '',
        isShowingResults: false,
      };
    }

    case Actions.SET_ROLE_FILTER: {
      return {
        ...state,
        roleFilter: action.role,
      };
    }

    case Actions.TOGGLE_PERSON_RESULT_SELECTION: {
      const newPersons = _.cloneDeep(state.persons);
      const person = newPersons.find((person) => person.id === action.id);
      if (!person) {
        return state;
      } else {
        person.isSelected = !person.isSelected;
        return {
          ...state,
          persons: newPersons,
        };
      }
    }

    case Actions.TOGGLE_STUDENT_CONTACT_SELECTION: {
      const newPersons = _.cloneDeep(state.persons);
      const student = newPersons.find(
        (person) => person.id === action.studentId,
      );
      if (!student) {
        return state;
      } else {
        const contact = student.contacts?.find(
          (contact) => contact.id === action.contactId,
        );

        if (contact) {
          contact.isSelected = !contact.isSelected;
        }
        return {
          ...state,
          persons: newPersons,
        };
      }
    }

    default:
      return state;
  }
};

export default GeneratorReducer;
