/*
 * angular-makequestion-directive v0.0.1
 * (c) 2014-2015 Emerson Jose http://www.devsouza.com
 * License: MIT
 */

'use strict';

angular.module('esouza.makequestion', [])
    .directive('eszMakequestion', function() {
        return {
            restrict: 'E',
            scope:{
                question: '='
            },
            link: function(scope, element, attributes) {
                var question = scope.question,
                    text = question.text;
                do
                {
                    text = text.replace('#input', '<input type="text" data-id="'+ question.id +'" data-answers="'+ question.answers +'" class="tag-question" />');

                } while(text.indexOf('#input') > -1)

                element.append(text);

                $('.tag-question').on('blur', function(event) {
                    var self = $(this),
                        isValid = false,
                        answers = self.data('answers').split(',');

                    $.each(answers, function(index,item) {
                        if (item == self.val()) {
                            isValid = true;
                        }
                    });

                    self.data("isvalid",isValid);
                });
            }
        }
    }).service('eszMakeQuestionService', function() {

        return {
            'score':0,
            'calcScore': function() {
                var self = this,
                    correctAnswers = 0,
                    questions = 0;

                $('.tag-question').each(function(index, item) {
                    if ($(item).data('isvalid')) {
                        correctAnswers++;
                    }

                    questions++;
                });

                self.score = (correctAnswers/questions)*100;
            }
        }
});