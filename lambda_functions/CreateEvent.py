import json
import psycopg2

def lambda_handler(event, context):
    conn_string = "host='calendar.cbxngq3moeaw.us-east-1.rds.amazonaws.com' dbname='postgres' user='postgres' password='password'"
    conn = psycopg2.connect(conn_string)
    with conn.cursor() as cur:
        cur.execute("INSERT INTO event (name, description, occur_time, duration) VALUES ( '" + event['name'] + "', '" + event['description'] + "', to_timestamp('" + event['date'] + " " + event['time'] + "', 'YYYY-MM-DD HH24:MI' ), '" + event['duration'] +"')")
        conn.commit()
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        }
    }
