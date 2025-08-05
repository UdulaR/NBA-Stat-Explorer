package com.nbastatexplorer.nbastatexplorer.player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//extends JpaRepository interface --> provides CRUD operations
//Player = Entity type
// String = Player primary key is String
public interface PlayerRepository extends JpaRepository<Player, String> {
    
}
