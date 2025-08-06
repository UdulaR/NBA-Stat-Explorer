package com.nbastatexplorer.nbastatexplorer.player;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

//Service Layer
@Component
//managed by spring container --> create instance of class and manage lifecycle
public class PlayerService {

    private final PlayerRepository playerRepository;

    //@Autowired not necessary with latest verision of spring unless there are multiple constructors and you have @Componenet
    //@Autowired --> tells springs dependency injection container to find matching bean and inject automatically to dependency
    //dependency --> object or class your class needs to function --> playerRepository is a dependency for playerService class

    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public List<Player> getPlayer() {
        return playerRepository.findAll();
    }

    public List<Player> getPlayersFromTeam(String teamName) {
        //findall gets all data from database
        //stream converts coollection (like list) to a stream
        return playerRepository.findAll().stream()
                //filter (p ->p.getname()) keeps only elements that match condition
                .filter(player -> teamName.equals(player.getTeam()))
                //converts stream back into a list
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByName(String searchText){
        return playerRepository.findAll().stream()
                .filter(player -> player.getName().toLowerCase().contains(searchText.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByPos(String searchText) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getPosition().toLowerCase().contains(searchText.toLowerCase())).collect(Collectors.toList());
    }

    public List<Player> getPlayersByTeamAndPosition(String teamName, String position) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getTeam().equals(teamName) && player.getPosition().equals(position)).collect(Collectors.toList());
    }

    public Player addPlayer(Player player) {
        playerRepository.save(player);
        return player;
    }

    public Player updatePlayer(Player updatedPlayer) {
        //optional --> java class --> represents values that might not be present

        Optional<Player> existingPlayer = playerRepository.findByName(updatedPlayer.getName());

        //isPresent() is method in optional class --> check if value is present
        if (existingPlayer.isPresent()) {
            Player playerToUpdate = existingPlayer.get();
            playerToUpdate.setName(updatedPlayer.getName());
            playerToUpdate.setTeam(updatedPlayer.getTeam());
            playerToUpdate.setPosition(updatedPlayer.getPosition());

            playerRepository.save(playerToUpdate);
            return playerToUpdate;
        }
        return null;
    }

    @Transactional
    public void deletePlayer(Player playerName) {
        playerRepository.deleteByName(playerName.getName());
    }


}
