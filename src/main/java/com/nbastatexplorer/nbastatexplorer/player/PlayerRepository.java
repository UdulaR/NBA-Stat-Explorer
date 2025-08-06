package com.nbastatexplorer.nbastatexplorer.player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
//extends JpaRepository interface --> provides CRUD operations
//Player = Entity type
// String = Player primary key is String
public interface PlayerRepository extends JpaRepository<Player, String> {

    //to delete a player by name
    void deleteByName(String playerName);

    //to find a player by name
    //optional is incase player does not exist
    Optional<Player> findByName(String name);
}
