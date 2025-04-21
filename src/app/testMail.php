<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (mail('h.bischoping@gmx.de', 'Test', 'Das ist ein Test')) {
    echo "Mail gesendet";
} else {
    echo "Fehler beim Senden";
}