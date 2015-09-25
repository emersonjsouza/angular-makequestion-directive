# angular-makequestion-directive [![Build Status](https://travis-ci.org/emersonjsouza/angular-makequestion-directive.png)](https://travis-ci.org/emersonjsouza/angular-makequestion-directive)

## Usage
1. Include `jquery.js`. It should be located at `bower_components/jquery/`.
2. Include `angular.js`. It should be located at `bower_components/angularjs/`.
3. Include `makequestion.js` provided by this component into your app.
4. Add `esouza.makequestion` as a module dependency to your app.

5. Create an object question in your controller to bind it on directive esz-makequestion:

```javascript
$scope.item = {
	id: 1,
	text: 'make question #input awesome',
	answers: 'is'
};
```

6. Insert the `esz-makequestion` directive into your template and bind object question:

```html
<esz-makequestion question="item"></esz-makequestion>
```
## Options

You can call method `calcScore` to calculate how many question were correct, use eszMakeQuestionService as a dependency to your controller:

```javascript
angular.module('myApp', ['esouza.makequestion'])
	.controller('myController', function($scope, eszMakeQuestionService) {
		$scope.question = eszMakeQuestionService;
	});
```

```html
<a ng-click="question.calcScore()">calc score</a>
{{ question.score }}
```


## License
MIT
