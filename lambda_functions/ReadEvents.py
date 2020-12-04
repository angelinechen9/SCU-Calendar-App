import json
import psycopg2


def lambda_handler(event, context):
    conn_string = "host='calendar.cbxngq3moeaw.us-east-1.rds.amazonaws.com' dbname='postgres' user='postgres' password='password'"
    conn = psycopg2.connect(conn_string)
    with conn.cursor() as cur:
        cur.execute("SELECT e.id, e.name, description, to_char(occur_time,'HH:MI AM') AS time,  to_char(occur_time, 'DD MON YYYY') as date, duration FROM event e")
        conn.commit()
        records = cur.fetchall()
    data = []
    for i, record in enumerate(records):
        
        data.append({
            'id': record[0], 
            'name': record[1],
            'description': record[2],
            'time': record[3],
            'date': record[4],
            'duration': record[5]
        })
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        },
        'body': data
    }
