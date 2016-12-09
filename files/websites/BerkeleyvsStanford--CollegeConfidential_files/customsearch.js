(function(window, $) {
   'use strict';

   $(function () {
      var $searchModule, $form, $formInput, $lastActive, searchInit,
         searchToggle, searchEventHandler, searchSetActive, searchGetActive;

      $searchModule = $('#Search-Module');
      $form = $('form', $searchModule);
      $formInput = $('#Form_Search', $searchModule);
      $lastActive = $('.Active', $searchModule);

      var db = window.localStorage, key = 'customSearch';

      searchSetActive = function ($el) {
         db.setItem(key, JSON.stringify({
            active:  $el.attr('href')
         }));

         $lastActive = $el;
      }

      searchGetActive = function () {
         var item = JSON.parse(db.getItem(key));

         if (jQuery.isEmptyObject(item)) {
            return null;
         } else {
            return item;
         }
      }

      searchToggle = function ($el) {
         if ($el.hasClass('Active')) {
            return;
         }

         $lastActive.removeClass('Active');
         searchSetActive($el);
         $el.addClass('Active');

         $form.attr('action', gdn.url($el.attr('href')));
         $formInput.attr('placeholder', $el.text());

         switch ($el.text()) {
            case 'Search Entire Site':
               $formInput.attr('name', 'q');
               break;
            case 'Search Forum':
               $formInput.attr('name', 'Search');
               break;
         }
      }

      searchInit = function () {
         var activeOption, $activeOption;

         if (searchGetActive() === null) {
            searchSetActive($lastActive);
         }

         activeOption = searchGetActive();
         $activeOption = $('.Search-Option[href="' + activeOption.active + '"]', $searchModule);

         if ($activeOption.length) {
            searchToggle($activeOption);
         }
      }

      searchEventHandler = function (e) {
         e.preventDefault();

         var self, $self;

         self = this;
         $self = $(self);

         searchToggle($self);
      }

      searchInit(); // Initialize the custom search module

      jQuery('#Search-Module').on('click', '.Search-Option', searchEventHandler);
   });
})(window, jQuery);
