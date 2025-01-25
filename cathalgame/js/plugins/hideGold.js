

/*:
 * @plugindesc Hide/show the gold window mid-game.
 * @author Caethyril
 * @help Use this in a Script command to hide the gold window:
 *    $gameSystem._hideGoldWindow = true;
 * Use this to show it again:
 *    delete $gameSystem._hideGoldWindow;
 * 
 * Terms of use: free to use and/or modify for any project!
 */

(function(alias) {
    Scene_Menu.prototype.createGoldWindow = function() {
        alias.apply(this, arguments);
        if ($gameSystem._hideGoldWindow) this._goldWindow.hide();
    };
})(Scene_Menu.prototype.createGoldWindow);

