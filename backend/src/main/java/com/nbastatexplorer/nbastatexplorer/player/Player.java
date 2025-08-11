package com.nbastatexplorer.nbastatexplorer.player;
//entity class --> maps directly to database tables

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity //says class is jpa entity
@Table(name="stats")
public class Player {
    @Id // makes sure name is primary key of database
    @Column(name="name", unique=true)
    private String name;

    @Column(name="position")
    private String position;

    @Column(name="team")
    private String team;

    @Column(name="ppg")
    private Integer ppg;

    @Column(name="ast")
    private Integer ast;

    @Column(name="trb")
    private Integer trb;

    @Column(name="stls")
    private Integer stls;

    @Column(name="blks")
    private Integer blks;

    //default constructor
    public Player() {
    }

    public Player(String name, String position, String team, Integer ppg, Integer ast, Integer trb, Integer stls, Integer blks) {
        this.name = name;
        this.position = position;
        this.team = team;
        this.ppg = ppg;
        this.ast = ast;
        this.trb = trb;
        this.stls = stls;
        this.blks = blks;
    }

    public Player(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public Integer getPpg() {
        return ppg;
    }

    public void setPpg(Integer ppg) {
        this.ppg = ppg;
    }

    public Integer getAst() {
        return ast;
    }

    public void setAst(Integer ast) {
        this.ast = ast;
    }

    public Integer getTrb() {
        return trb;
    }

    public void setTrb(Integer trb) {
        this.trb = trb;
    }

    public Integer getStls() {
        return stls;
    }

    public void setStls(Integer stls) {
        this.stls = stls;
    }

    public Integer getBlks() {
        return blks;
    }

    public void setBlks(Integer blks) {
        this.blks = blks;
    }
}
