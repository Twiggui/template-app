const haversine = require('haversine');
const initialState = {
  userData: null,
  sports: [],
  lives: [],
  clubs: [],
  isRecording: false,
  currentLive: null,
  dates: [],
  markers: [],
  coordinates: [],
  coordinatesString: '[]',
  showsUserLocation: false,
  isMoving: false,
  isStarted: false,
  odometer: 0,
  pointsInterets: [],
  polylines: [],
  nomStation: null,
  descriptionStation: null,
  currentPosition: null,
  currentLiveFromSegment: null,
  currentLiveFromSegmentId: null,
  currentMapStyle: Platform.OS == 'android' ? 'terrain' : 'hybrid',
  folocodes: [], //{folocode : , nom, prenom ?}
  isOkPopupGps: false,
  isOkPopupBAttery: false,
  isOkPopupBAttery2: false,
  userClubs: [],
  isGpsNotOk: true,
};

const initialMockState = {
  userData: {
    idUtilisateur: 7000,
  },
  sports: [],
  lives: [{idLive: 1, libelleLive: 'test'}],
  clubs: [],
  isRecording: false,
  currentLive: {
    idLive: 3,
  },
  dates: [],
  markers: [],
  coordinates: [],
  coordinatesString: '[]',
  showsUserLocation: false,
  isMoving: false,
  isStarted: false,
  odometer: 0,
  pointsInterets: [],
  polylines: [],
  nomStation: null,
  descriptionStation: null,
  currentPosition: null,
  currentLiveFromSegment: null,
  currentLiveFromSegmentId: null,
  currentMapStyle: Platform.OS == 'android' ? 'terrain' : 'hybrid',
  folocodes: [],
  isOkPopupGps: false,
  isOkPopupBAttery: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      let newFolocode = {
        folocode: action.data.folocodeUtilisateur,
        prenom: action.data.prenomUtilisateur,
        nom: action.data.nomUtilisateur,
      };
      if (state.folocodes == null) {
        state.folocodes = [];
      }
      let folocodes = JSON.parse(JSON.stringify(state.folocodes));
      if (
        folocodes.filter(f => f.folocode == newFolocode.folocode).length == 0
      ) {
        folocodes.push(newFolocode);
      }

      let nextState = {
        ...state,
        folocodes: folocodes,
        userData: action.data,
      };
      console.log(nextState.folocodes);
      return nextState || state;
    }
    case 'LOGOUT': {
      let nextState = initialState;
      nextState.folocodes = state.folocodes;
      return nextState || state;
    }
    case 'GET_LIVES':
      {
        let nextState = {
          ...state,
          lives: action.data,
        };
        return nextState || state;
      }
      ``;
    case 'GET_CLUBS': {
      let nextState = {
        ...state,
        clubs: action.data,
      };
      return nextState || state;
    }

    case 'ADD_FOLOCODE': {
      let nextState = {
        ...state,
        folocodes: [...state.folocodes, action.data],
      };
      return nextState || state;
    }

    case 'VIEW_POPUPAIDE': {
      let nextState = {
        ...state,
        isOkPopupBAttery: true,
      };
      return nextState || state;
    }

    case 'VIEW_POPUPGPS': {
      let nextState = {
        ...state,
        isOkPopupGps: true,
      };
      return nextState || state;
    }

    case 'VIEW_POPUPBATTERY': {
      let nextState = {
        ...state,
        isOkPopupBAttery2: true,
      };
      return nextState || state;
    }

    case 'GET_SPORTS': {
      let nextState = {
        ...state,
        sports: action.data,
      };
      return nextState || state;
    }
    case 'DELETE_LIVE': {
      var currentLives = new Object(state.lives);
      currentLives = currentLives.filter(l => l.idLive != action.data);
      let nextState = {
        ...state,
        lives: currentLives,
      };
      return nextState || state;
    }

    case 'CREATE_LIVE': {
      let nextState = {
        ...state,
        lives: [...state.lives, action.data],
        currentLive: action.data,
      };

      return nextState || state;
    }
    case 'UPDATE_MAP_STYLE': {
      let nextState = {
        ...state,
        currentMapStyle: action.data,
      };
      return nextState || state;
    }

    case 'SAVE_CURRENT_LIVE': {
      let nextState = {
        ...state,
        currentLive: action.data,
      };
      // alert(JSON.stringify(action.data));

      return nextState || state;
    }

    case 'UPDATE_ACCEPT_CHALLENGE': {
      let nextState = {
        ...state,
        userData: {
          ...state.userData,
          acceptChallengeUtilisateur: action.data.acceptChallengeUtilisateur,
          acceptChallengeNameUtilisateur:
            action.data.acceptChallengeNameUtilisateur,
        },
      };
      // alert(JSON.stringify(action.data));

      return nextState || state;
    }

    case 'SAVE_IS_RECORDING': {
      let nextState = {
        ...state,
        isRecording: action.data,
      };

      return nextState || state;
    }

    case 'GET_USER_CLUBS': {
      let nextState = {
        ...state,
        userClubs: action.data,
      };
      return nextState || state;
    }

    case 'SAVE_MARKERS': {
      let nextState = {
        ...state,
        markers: action.data,
      };

      return nextState || state;
    }
    case 'SAVE_COORDINATES': {
      let nextState = {
        ...state,
       // coordinates: action.data,
        coordinatesString: JSON.stringify(action.data),
      };

      return nextState || state;
    }

    case 'UPDATE_GPS_OK': {
      let nextState = {
        ...state,
        isGpsNotOk: action.data.isGpsNotOk,
        currentPosition : action.data.location.coords
      };
      return nextState || state;
    }

    case 'ADD_COORDINATE': {
      var coords = JSON.parse(state.coordinatesString);

      let isGpsNotOk = true;

      if (action.data.speed != -1) {
        isGpsNotOk = false;
      }
      let odometer = state.odometer;

      if (coords.length > 1) {
        let oldLatLong = coords[coords.length - 1];
        var dist = haversine(oldLatLong, action.data);
        odometer += dist;
      }

      coords.push(action.data);

      let nextState = {
        ...state,
        coordinatesString: JSON.stringify(coords),
        currentPosition: action.data,
        isGpsNotOk: isGpsNotOk,
        odometer: odometer,
      };
      return nextState || state;
    }
    case 'IGNORE_LIVE': {
      let lives = JSON.parse(JSON.stringify(state.lives));

      lives = lives.filter(l => l.idLive != action.data);

      let nextState = {
        ...state,
        lives: lives,
      };

      return nextState || state;
    }
    case 'CLEAR_MAP': {
      let nextState = {
        ...state,
        coordinates: [],
        coordinatesString: '[]',
        markers: [],
        dates: [],
        showsUserLocation: false,
        isRecording: false,
        isMoving: false,
        odometer: 0,
        pointsInterets: [],
        polylines: [],
        nomStation: null,
        descriptionStation: null,
        currentPosition: null,
      };

      return nextState || state;
    }

    case 'ADD_DATE': {
      let nextState = {
        ...state,
        dates: [...state.dates, action.data],
      };
      return nextState || state;
    }

    case 'UPDATE_ODOMETER': {
      var data = action.data;
      let nextState = {
        ...state,
        odometer: data.odometer,
      };

      return nextState || state;
    }

    case 'IS_MOVING': {
      let nextState = {
        ...state,
        isMoving: action.data,
      };
      return nextState || state;
    }

    case 'UPDATE_INVITES': {
      var newLive = new Object(state.currentLive);
      newLive.invites = action.data;
      let nextState = {
        ...state,
        currentLive: newLive,
      };

      return nextState || state;
    }

    case 'UPDATE_STATION_DATA': {
      let nextState = {
        ...state,
        polylines: action.data.polylines,
        nomStation: action.data.nomStation,
        descriptionStation: action.data.descriptionStation,
        pointsInterets: action.data.pointsInterets,
      };
      return nextState || state;
    }

    case 'ADD_TRACE': {
      var trace = action.data;
      var traces = new Object(state.polylines);
      traces.push(trace);
      let nextState = {
        ...state,
        polylines: traces,
      };
      return nextState || state;
    }

    case 'TOGGLE_TRACE': {
      var traces = new Object(state.polylines);

      var trace = traces.filter(pol => pol.nomTrace == action.data)[0];
      trace.isActive = !trace.isActive;

      let nextState = {
        ...state,
        polylines: traces,
      };
      return nextState || state;
    }
    case 'CURRENT_LIVE_FOR_SEGMENT': {
      let nextState = {
        ...state,
        currentLiveFromSegmentId: action.data.idLive,
        currentLiveFromSegment: action.data,
      };
      return nextState || state;
    }
    case 'CURRENT_LIVE_FOR_SEGMENT_ID': {
      let nextState = {
        ...state,
        currentLiveFromSegmentId: action.data,
      };
      // console.log(nextState.polylines)
      return nextState || state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
