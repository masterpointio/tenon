$.ajaxSetup({
  dataType: 'json',
  'beforeSend' : function(xhr){
    xhr.setRequestHeader("Accept", "application/json");
  }
});

var Tenon = {
  features: {},
  helpers: {},

  init: function() {
    // setup generic loader
    Tenon.$genericLoader = $('.generic-loader');

    // init tooltips
    $(document).tooltip({
      selector: '[data-tooltip]',
      container: 'body'
    });

    // init popovers
    $('[data-popover]').popover({
      trigger: 'focus'
    });

    // init select2
    $('select').select2();

    Tenon.features.i18n.init();
    Tenon.features.forms.init();
    Tenon.features.fileSelectWidget.init();
    Tenon.features.videoFeeds.init();
    new Tenon.features.Alert();
    new Tenon.features.AssetCropping();
    new Tenon.features.MainMenu();
    new Tenon.features.Pagination();
    new Tenon.features.HamburgerNavigation();
    new Tenon.features.InfiniteLoading();
    new Tenon.features.RecordListToggling();
    new Tenon.features.RecordTypeSelector();
    new Tenon.features.QuickSearch();
    new Tenon.features.DateTimePicker();
    new Tenon.features.ModalWindows();
    new Tenon.features.ModalForms();
    new Tenon.features.RecordApproval();
    new Tenon.features.RecordDeletion();
    $.each($('[data-records-url]'), function () {
      new Tenon.features.RecordList($(this));
    });
    new Tenon.features.SortableNestedFields();
    new Tenon.features.tenonContent.Base();
    new Tenon.features.Medium();


    Tenon.dispatcher.initialize();
  }

};