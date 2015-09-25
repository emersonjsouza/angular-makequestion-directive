describe('eszMakequestion', function () {
  var $compile,
      $rootScope;

    beforeEach(module('esouza.makequestion'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should work as an element', function () {
        $rootScope.question = {
            id: 1,
            text: 'make question #input awesome',
            answers: 'is'
        };
        var elt = angular.element('<esz-makequestion question="question"></esz-makequestion>');
        $compile(elt)($rootScope);
        expect(elt.html()).toBe('make question <input data-id="1" data-answers="is" class="tag-question" type="text"> awesome');
    });
});