'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 15;
var CLOUD_GAP = 10;
var COLUMN_GAP = 50;
var TEXT_HEIGHT = 16;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#FFFFFF');

  ctx.font = 'PT Mono 16px';
  ctx.fillStyle = '#000000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + TEXT_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000000';
    ctx.fillText(players[i], CLOUD_X + GAP + (COLUMN_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (COLUMN_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 2 + TEXT_HEIGHT * 2 + BAR_MAX_HEIGHT - (BAR_MAX_HEIGHT * times[i] / maxTime));

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(235, ' + (10 + i * 30) + '%, 50%)';
    }

    ctx.fillRect(CLOUD_X + GAP + (COLUMN_GAP + BAR_WIDTH) * i, CLOUD_Y + GAP * 2 + TEXT_HEIGHT * 3 + BAR_MAX_HEIGHT - (BAR_MAX_HEIGHT * times[i] / maxTime), BAR_WIDTH, BAR_MAX_HEIGHT * times[i] / maxTime);
  }
};
