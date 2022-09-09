<?php
@$di = $_GET['page'];
if ($di=="" || $page=="main") {
	include 'main/index.html';}

elseif ($di=="p03") {
	include 'p03/index.html';}



else{
	include 'main/index.html';
	
};?>