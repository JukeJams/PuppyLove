webpackHotUpdate("main",{

/***/ "./client/component/MyProfile.jsx":
/*!****************************************!*\
  !*** ./client/component/MyProfile.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction MyProfile(_ref) {\n  var sessUser = _ref.sessUser,\n      sessDog = _ref.sessDog,\n      open = _ref.open;\n  var id = sessDog.id,\n      dog_name = sessDog.dog_name,\n      breed = sessDog.breed,\n      weight = sessDog.weight,\n      age = sessDog.age,\n      fixed = sessDog.fixed,\n      description = sessDog.description,\n      image = sessDog.image,\n      id_user = sessDog.id_user;\n  var username = sessUser.username,\n      cell = sessUser.cell,\n      home_town = sessUser.home_town,\n      email = sessUser.email;\n\n  var updateUserAndDogInfo = function updateUserAndDogInfo(obj) {\n    _axios2.default.post('./updateUserAndDog', obj).then(function (result) {\n      console.log('success');\n    }).catch(function (err) {\n      return console.log('ERR', err);\n    });\n  };\n\n  var _useState = (0, _react.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      editUserbuttonClicked = _useState2[0],\n      editChange = _useState2[1];\n  //user edit states\n\n\n  var _useState3 = (0, _react.useState)(''),\n      _useState4 = _slicedToArray(_useState3, 2),\n      usernameEdit = _useState4[0],\n      setUsername = _useState4[1];\n\n  var _useState5 = (0, _react.useState)(''),\n      _useState6 = _slicedToArray(_useState5, 2),\n      cellEdit = _useState6[0],\n      setCell = _useState6[1];\n\n  var _useState7 = (0, _react.useState)(''),\n      _useState8 = _slicedToArray(_useState7, 2),\n      hometownEdit = _useState8[0],\n      setHometown = _useState8[1];\n\n  var _useState9 = (0, _react.useState)(''),\n      _useState10 = _slicedToArray(_useState9, 2),\n      emailEdit = _useState10[0],\n      setEmail = _useState10[1];\n  //dog edit states\n\n\n  var _useState11 = (0, _react.useState)(''),\n      _useState12 = _slicedToArray(_useState11, 2),\n      dogNameEdit = _useState12[0],\n      setDogName = _useState12[1];\n\n  var _useState13 = (0, _react.useState)(''),\n      _useState14 = _slicedToArray(_useState13, 2),\n      weightEdit = _useState14[0],\n      setWeight = _useState14[1];\n\n  var _useState15 = (0, _react.useState)(''),\n      _useState16 = _slicedToArray(_useState15, 2),\n      ageEdit = _useState16[0],\n      setAge = _useState16[1];\n\n  var _useState17 = (0, _react.useState)(''),\n      _useState18 = _slicedToArray(_useState17, 2),\n      breedEdit = _useState18[0],\n      setBreed = _useState18[1];\n\n  var _useState19 = (0, _react.useState)(''),\n      _useState20 = _slicedToArray(_useState19, 2),\n      descEdit = _useState20[0],\n      setDesc = _useState20[1];\n\n  var _useState21 = (0, _react.useState)(''),\n      _useState22 = _slicedToArray(_useState21, 2),\n      imageEdit = _useState22[0],\n      setImage = _useState22[1];\n\n  var onEvent = function onEvent(event, setFunc, val) {\n    if (event.target.value === '' || event.target.value === undefined) {\n      setFunc(val);\n    } else {\n      setFunc(event.target.value);\n    }\n  };\n  //Form to submit edit for User and Dog info \n  var bothDiv = _react2.default.createElement(\n    'div',\n    { id: 'sc-edprofile' },\n    _react2.default.createElement(\n      'div',\n      null,\n      'Edit User\\'s Info'\n    ),\n    _react2.default.createElement(\n      'div',\n      { 'class': 'sc-container' },\n      _react2.default.createElement(\n        'label',\n        null,\n        'Username:'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('input', { onChange: function onChange(event) {\n          return onEvent(event, setUsername, username);\n        }, type: 'text', placeholder: username }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'label',\n        null,\n        'Cell:'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('input', { onChange: function onChange(event) {\n          return onEvent(event, setCell, cell);\n        }, type: 'text', placeholder: cell }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'label',\n        null,\n        'Hometown:'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('input', { onChange: function onChange(event) {\n          return onEvent(event, setHometown, home_town);\n        }, type: 'text', placeholder: home_town }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'label',\n        null,\n        'Email:'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('input', { onChange: function onChange(event) {\n          return onEvent(event, setEmail, email);\n        }, type: 'text', placeholder: email }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'div',\n        null,\n        'Edit Dog\\'s Info'\n      ),\n      _react2.default.createElement(\n        'label',\n        null,\n        'Name:'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('input', { onChange: function onChange(event) {\n          return onEvent(event, setDogName, dog_name);\n        }, type: 'text', placeholder: dog_name }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'label',\n        null,\n        'Weight:'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('input', { onChange: function onChange(event) {\n          return onEvent(event, setWeight, weight);\n        }, type: 'text', placeholder: weight }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'label',\n        null,\n        'Age:'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('input', { onChange: function onChange(event) {\n          return onEvent(event, setAge, age);\n        }, type: 'text', placeholder: age }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'label',\n        null,\n        'Breed:'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('input', { onChange: function onChange(event) {\n          return onEvent(event, setBreed, breed);\n        }, type: 'text', placeholder: breed }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'label',\n        null,\n        'Description:'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('input', { onChange: function onChange(event) {\n          return onEvent(event, setDesc, description);\n        }, type: 'text', placeholder: description }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        'label',\n        null,\n        'Image Url:'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement('input', { onChange: function onChange(event) {\n          return onEvent(event, setImage, image);\n        }, type: 'text', placeholder: 'Image Url' }),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { 'class': 'favorite styled',\n          to: '/myprofile',\n          onClick: function onClick() {\n            editChange(false);\n            console.group('editinfo submit clicked');\n            updateUserAndDogInfo({\n              user: {\n                username: usernameEdit,\n                cell: cellEdit,\n                hometown: hometownEdit,\n                email: emailEdit\n              },\n              dog: {\n                dog_name: dogNameEdit,\n                weight: weightEdit,\n                breed: breedEdit,\n                age: ageEdit,\n                description: descEdit,\n                fixed: 0,\n                image: imageEdit\n              }\n            });\n          } },\n        'Submit'\n      )\n    )\n  );\n  if (sessUser) {\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'div',\n        { id: 'divEditClicked' },\n        _react2.default.createElement(\n          'button',\n          { id: 'settings', onClick: open },\n          'Menu'\n        ),\n        _react2.default.createElement(\n          'div',\n          { 'class': 'profileContainer' },\n          _react2.default.createElement(\n            'div',\n            null,\n            username + '\\'s Profile Inforamtion'\n          ),\n          _react2.default.createElement(\n            'div',\n            { 'class': 'profileInfo' },\n            'Username: ' + username\n          ),\n          _react2.default.createElement(\n            'div',\n            { 'class': 'profileInfo' },\n            'Email: ' + email\n          ),\n          _react2.default.createElement(\n            'div',\n            { 'class': 'profileInfo' },\n            'Cell Phone Number: ' + cell\n          ),\n          _react2.default.createElement(\n            'div',\n            { 'class': 'profileInfo' },\n            'Hometown: ' + home_town\n          )\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: function onClick() {\n              console.log('button clicked!');\n              editChange(!editUserbuttonClicked);\n            } },\n          'Edit Profile'\n        ),\n        editUserbuttonClicked ? bothDiv : _react2.default.createElement('div', null)\n      ),\n      _react2.default.createElement(\n        'div',\n        { id: 'dogContainer' },\n        _react2.default.createElement(\n          'div',\n          null,\n          username + '\\'s Dog'\n        ),\n        _react2.default.createElement(\n          'div',\n          { 'class': 'profileInfo' },\n          'Name: ' + dog_name\n        ),\n        _react2.default.createElement(\n          'div',\n          { 'class': 'profileInfo' },\n          _react2.default.createElement('img', { src: image, alt: '1' })\n        ),\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/dogprofile/' + id },\n          ' ',\n          'Go to ' + dog_name + '\\'s Profile '\n        )\n      )\n    );\n  } else {\n    _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(\n        'button',\n        { id: 'settings', onClick: open },\n        'Menu'\n      ),\n      'User is not signed in'\n    );\n  }\n};\nexports.default = MyProfile;\n\n//# sourceURL=webpack:///./client/component/MyProfile.jsx?");

/***/ })

})