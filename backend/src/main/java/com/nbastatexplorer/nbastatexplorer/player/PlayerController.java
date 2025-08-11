package com.nbastatexplorer.nbastatexplorer.player;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// how computers talk to each other over web --> when browser, app or frontend wants data it sends http request
// Parts of http inlude:
// ht
// tp method (what type of action your doing --> GET(retireve data) POST(send data to create something PUT(Update existing item) DELETE(remove item)
// URL (Path) - where your going
// Headers - metadata (auth info, content type)
// Body - actual data (used in POST/PUT) --> in this case player data in json
@CrossOrigin(origins = "http://localhost:5173")
//rest controller handles incoming http requests --> puts in service layer and gives out output
@RestController //every method returns a object (data - json) instead of view (html) --> view renders user interface
@RequestMapping(path="/player")//class/method handle http requests that match the path
//when user visists this url run this method
//sets a base path for all http requests in controller
public class PlayerController {
    private final PlayerService playerService; //service layer dependency --> controller uses service class to talk to database


    //constructor based dependency injection
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    //handles GET (fetch) /player requests
    @GetMapping
    public List<Player> getPlayers(
            @RequestParam(required = false) String team, //RequestParam gets query paramteres --> used to read key=value pairs in url after ?
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String position){
        if(team != null && position != null){
            return playerService.getPlayersByTeamAndPosition(team, position);
        } else if (team !=null) {
            return playerService.getPlayersFromTeam(team);
        } else if (name != null){
            return playerService.getPlayersByName(name);
        } else if (position != null){
            return playerService.getPlayersByPos(position);
        } else{
            return playerService.getPlayer();
        }
    }

    // handles Post(create) /player requests
    @PostMapping
    public ResponseEntity<Player> addPlayer(@RequestBody Player player){ //Requestbody converts json in request body to java object - reads http request and turn into a java object
        Player createdPlayer = playerService.addPlayer(player);
        return new  ResponseEntity<>(createdPlayer, HttpStatus.CREATED); //httpstatus tells clienbt what happens during request
        //httpstatus 201
    }

    // Put(update) /player requests
    @PutMapping
    public ResponseEntity<Player> updatePlayer(@RequestBody Player player){
        Player updatedPlayer = playerService.updatePlayer(player);
        if (updatedPlayer != null){
            return new  ResponseEntity<>(updatedPlayer, HttpStatus.OK); //http status 200
        }else{
            return new  ResponseEntity<>(HttpStatus.NOT_FOUND); //http 404
        }
    }

    // delete /player
    @DeleteMapping("/{playerName}")
    public ResponseEntity<String> deletePlayer(@PathVariable String playerName){ // Pathvariable when value is part of http url
        playerService.deletePlayer(playerName);
        return new  ResponseEntity<>("Player deleted successfully", HttpStatus.OK); //http ok 200 --> succeded

    }

}


