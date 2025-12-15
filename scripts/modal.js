$(document).ready(function() {
  // MODAL
  var modalText = {
    discover: {
      title: 'Maven Market Report ',
      tag: 'Report Dashboard.',
      detail:
        '•	Developed interactive Power BI dashboards for AdventureWorks, focusing on sales trends, customer insights, and product performance',
      link: ''
      
    },
    ordering: {
      title: 'AdventureWork Report',
      tag: '•	Gained valuable experience in transforming raw data into actionable insights.',
      detail:
        '•	Implemented DAX for custom metrics and ensured the dashboards were user-friendly for non-technical users',
      link: ''
    },
    newrelic: {
      title: 'Netflix Report',
      tag: '•	Netflix Analytics',
      detail:
        'Points out that the report is focused on analyzing Netflix data, which is relevant to media and streaming industry professionals.',
      link: ''
    },
    brave: {
      title: 'Amazon Prime Report',
      tag: 'Entertainment Analytics.',
      detail:
        'Demonstrates that the report is part of broader business intelligence efforts, focusing on extracting actionable insights from data',
      link: ''
    },
    walker: {
      title: 'Blinkit Report',
      tag: 'E-commerce Metrics',
      detail:
        'Suggests that the report analyzes aspects of delivery efficiency, such as delivery times and fulfillment rates.',
        link:''
    },
    powur: {
      title: 'IIIM Servers Monitoring Dashboard',
      tag: 'LIVE SERVER MONITORING SYSTEM.',
      detail:
        '• Developed and deployed a Smart Log Analysis System to automate log ingestion, cleaning, and transformation, reducing preprocessing time by over 70% and enhancing data readiness for analysis.Created real-time threat detection dashboards integrated with an alerting mechanism, significantly improvingresponse time to critical network events and anomalies.',
      link: ''
    },
    mystand: {
      title: 'Olympics 2024',
      tag: 'Medals & Athelets Analytics.',
      detail:
        'I have created an Olympics 2024 Dashboard with the help of PowerBi and Kaggle Dataset. I have shown various report analyzes aspects of Different Players Receving Medals at thier Sports'
    },
    never: {
      title: 'NeverSurrender',
      tag: 'ALS AWARENESS.',
      detail:
        'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.'
    },
    themall: {
      title: 'Network Packet Sniffer with Alert System',
      tag: 'Real-time packet capture &anomaly detection.',
      detail:
        'This project is a real-time network monitoring and security analysis tool developed using Python and Scapyy.The system captures live network packets, extracts key header information, and stores it in an SQLite database for analysis. An alert mechanism detects suspicious activities such as port scanning and abnormal traffic behaviour, helping identify potential attacks early. A traffic dashboard visualizes captured data, making network analysis more intuitive and effective.'
    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
